import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rohitninehertz:ev4X8qtDxytwvby0@cluster0.jmwc03p.mongodb.net/firstproject?retryWrites=true&w=majority&appName=Cluster0majority'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
