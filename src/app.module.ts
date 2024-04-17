import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://cvelez:users1234@cluster0.yelvcoj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'),

  ],
})
export class AppModule {}
