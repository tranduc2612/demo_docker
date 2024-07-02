import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST'),
        port: +configService.get('PORT') || 3306,
        username: configService.get('ACCOUNT'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.HOST,
    //   port: parseInt(process.env.PORT) || 3306,
    //   username:  process.env.ACCOUNT,
    //   password: process.env.PASSWORD,
    //   database: process.env.DATABASE,
    //   entities: [User],
    //   synchronize: true,
    // }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
