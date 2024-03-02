import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';
import { EventsGateway } from './events.gateway';
import { BullModule } from '@nestjs/bull';
import { UsersProcessor } from './users-queue.processor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([User]),
    BullModule.registerQueue({
      name: 'users',
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, EventsGateway, UsersProcessor],
  exports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
