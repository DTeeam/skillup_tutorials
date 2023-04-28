import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['pets'] });
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail({
        where: {
          id: id,
        },
      });
      return user;
    } catch (err) {
      throw err;
    }
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name });

    return this.usersRepository.save(newUser);
  }

  async updateUser(name: string): Promise<User> {
    const user = await this.usersRepository.create({ name });

    user.name = name;

    return this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);

    return this.usersRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
