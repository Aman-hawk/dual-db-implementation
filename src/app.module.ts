/* eslint-disable prettier/prettier */
// ...existing code...
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
// ...other imports...

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigModule available everywhere
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT ?? '5433', 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
    // ...other modules...
    UserModule,
  ],
  // ...existing code...
})
export class AppModule {}
// ...existing code...