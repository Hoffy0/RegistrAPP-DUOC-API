import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'

import { AttendanceModule } from './attendance/attendance.module';
import { SsoController } from './sso/sso.controller';
import { SsoModule } from './sso/sso.module';
import { SsoService } from './sso/sso.service';

@Module({
  imports: [
    SsoModule,
    AttendanceModule,

    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    
  ],
  controllers: [
    AppController,
    
  ],
  providers: [
    AppService,
    
  ],
})
export class AppModule {}
