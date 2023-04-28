import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class AppService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAll(): Promise<User[]>;
    getOneById(id: number): Promise<User>;
    createUser(name: string): Promise<User>;
    updateUser(name: string): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getHello(): string;
}
