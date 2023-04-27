import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {FileEntity} from "../files/entities/file.entity";
import {Repository} from "typeorm";
import {UserEntity} from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(UserEntity)
      private repository: Repository<UserEntity>
  ) {}

}
