import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(email: string): Promise<User> {
    return this.repository.findOne({email});
  }

  findOneForAuth(email: string): Promise<User> {
    return this.repository.findOne({email}, {select: ["email", "password", "name", "id"]});
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async create(userData) {
    const user = new User();
    user.name = userData.name
    user.password = userData.password
    user.email = userData.email
    user.entity = userData.entity
    user.position = userData.position
    user.phone = userData.phone
    user.town = userData.town
    const result = await this.repository.save(user);
    delete result.password;
    return result;
  }
}
