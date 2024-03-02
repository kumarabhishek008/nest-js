import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { AppConfigService } from 'src/config/app/appConfig.service';
import { MoreThan, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectQueue('users') private usersQueue: Queue,
    private readonly appConfigService: AppConfigService,
    @InjectRepository(User)
    private readonly userRespoistory: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRespoistory.create({
      ...createUserDto,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: Date(),
    });

    await this.userRespoistory.save(user);

    return user;
  }

  async findAll() {
    return this.findByQuery();
    const [data, count] = await this.userRespoistory.find({
      where: {
        age: MoreThan(50),
      },
      take: 1, // how many elements you want to retrieve
      skip: 0, // how many elements you want to skip
    });

    return { data, count };
    // for (let i = 0; i < 1000000; i++) {
    //   const element = this.users[i];
    //   const job = await this.usersQueue.add(
    //     { ...element, v: i },
    //     { lifo: true },
    //   );
    //   // console.log(job);
    // }
  }

  async findByQuery() {
    const data = await this.userRespoistory
      .createQueryBuilder('users')
      // .select('users.name')
      // .addSelect('users.age')
      .where('users.id=:id', { id: 5 })
      .getMany();

    return data;
  }

  async findOne(id: string) {
    return this.userRespoistory.findOne({
      where: {
        uuid: id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    await this.userRespoistory.update(user.id, {
      ...updateUserDto,
    });
    return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.userRespoistory.delete(user.id);
  }
}
