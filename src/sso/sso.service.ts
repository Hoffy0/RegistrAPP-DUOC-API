import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { I_USER } from './interfaces/user.interface';
import { CreateUserDTO } from './DTO/user.dto';

@Injectable()
export class SsoService {
    constructor(@InjectModel('User') private _userModel: Model<I_USER>){ }

    private generateToken(){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 50; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async getUserData(token: string){
        const user = await this._userModel.find({
            token: token
        });
        return user;
    }

    async login(email: string, password: string){
        const user = await this._userModel.find({
            email: email,
            password: password
        });
        return user;
    }

    async registerUser(newUser: CreateUserDTO): Promise<I_USER>{
        const user = await new this._userModel(newUser);
        user.token =  this.generateToken();
        return await user.save();
    }

}
