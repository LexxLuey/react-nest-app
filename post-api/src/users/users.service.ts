import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['posts', 'comments'] });
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['posts', 'comments'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.preload({
      id,
      ...updateUserInput,
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }

  async seedUsers(): Promise<User[]> {
    const usersToAdd = [];
    while (usersToAdd.length < 10) {
      const randomUser: CreateUserInput = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: 'password',
      };
      try {
        const newUser = await this.userRepository.create(randomUser);
        const user = this.userRepository.save(newUser);
        usersToAdd.push(user);
        Logger.log(`User ${newUser.username} seeded successfully`);
      } catch (error) {
        Logger.error(`Error seeding User: ${error.message}`, error.stack);
      }
    }
    return usersToAdd;
  }
}
