import { AppService } from './app.service';
import { User } from './user.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<User[]>;
}
