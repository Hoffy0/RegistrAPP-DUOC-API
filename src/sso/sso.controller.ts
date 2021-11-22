import { Controller, Get, Post, Put, Delete, Res, Body, Param, HttpStatus} from '@nestjs/common';
import { throws } from 'assert/strict';

import { CreateUserDTO } from './DTO/user.dto';
import { SsoService } from './sso.service';

@Controller('sso')
export class SsoController {

    constructor(
        private ssoService: SsoService,
    ){ }

    @Get('/data/:token')
    async getUserData(@Res() res, @Param('token') token){
        try {
            const userData = await this.ssoService.getUserData(token);
            return res.status(HttpStatus.OK).json({
                message: "User data",
                user: userData[0]
            });
        } catch (err) {
            console.error(err)
        }
    }

    @Post('/login')
    async loginUser(@Res() res, @Body() userData){
        let email = userData.email;
        let password = userData.password;
        try {
            const login = await this.ssoService.login(email, password);
            if(!login) throw new Error("Incorrect username or password.").message;
            return res.status(HttpStatus.OK).json({
                message: "User Logged",
                token: login[0].token
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: err,
                status: HttpStatus.BAD_REQUEST
            })
        }
    }

    @Post('/register')
    async registerUser(@Res() res, @Body() newUser: CreateUserDTO){
        try {
            if(newUser.email.includes("@duocuc.cl")){
                console.log("es correo institucional.")
                const user = await this.ssoService.registerUser(newUser);
                console.log(user);
                return res.status(HttpStatus.CREATED).json({
                    message: 'User created successfully!',
                    userData: user
                });
            }else{
                throw new Error('The email must be institutional.').message
            }
        } catch (err) {
            console.error(err)
            res.status(HttpStatus.BAD_REQUEST).json({
                error: err,
                status: HttpStatus.BAD_REQUEST
            });
        }
    }

}
