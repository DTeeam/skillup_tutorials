import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'nestjs',
      entities: [User],
      synchronize: true, //Ne sme bit v produkciji
    }),
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}
