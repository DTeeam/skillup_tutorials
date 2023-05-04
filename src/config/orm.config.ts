import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostGresConnectionOptions'

type ConfigType = TypeOrmModule & PostgresConnectionOptions
type ConnectionOptions = ConfigType

export const ORMConfig = async (configService: ConfigService): Promise<ConnectionOptions> => ({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PWD'),
  database: configService.get('DATABASE_NAME'),
  entities: configService.get['dist/**/*.entity.ts'],
  synchronize: true, //ONLY in production,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})
