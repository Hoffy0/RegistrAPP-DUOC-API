import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SsoController } from './sso.controller';
import { SsoService } from './sso.service';
import { UserSchema } from './schema/user.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'User', schema: UserSchema}
    ]),
  ],
  controllers: [
    SsoController,
  ],
  providers: [
    SsoService,
  ]
})
export class SsoModule {}
