import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, UserModule,
    JwtModule.register({
      global: true,
      secret: 'abc1234',
      signOptions: {expiresIn: '60s'}
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
