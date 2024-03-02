import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BullModule } from '@nestjs/bull';
import { AppConfigModule } from './config/app/appConfig.module';
import { DatabaseConfigModule } from './config/database/db.module';
import { DataBaseModule } from './database/database.module';

/**
 * **          ** ********  **********  *************
 * ****        ** **        **      **       **
 * **  **      ** **        **               **
 * **    **    ** ********  **********       **
 * **      **  ** **                **       **
 * **       ** ** **        **      **       **
 * **        **** ********  **********       **
 */

@Module({
  imports: [
    AppConfigModule,
    DatabaseConfigModule,
    AuthModule,
    UsersModule,
    DataBaseModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
