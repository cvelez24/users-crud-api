import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { User } from './../../schemas/user.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { USERS_MOCK, USER_MOCK } from '../__fixtures__/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';

const mockUserModel = {
  find: jest.fn().mockResolvedValue(USERS_MOCK),
};
const userServiceMock = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  deleteById: jest.fn(),
};

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: getModelToken(User.name), useValue: mockUserModel },
      ],
    })
      .overrideProvider(getModelToken(User.name))
      .useValue(jest.fn())
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be define', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should find all users', async () => {
      jest.spyOn(userServiceMock, 'findAll').mockResolvedValue(USERS_MOCK);
      const result = await service.findAll();
      expect(result).toMatchObject(USERS_MOCK);
    });
  });

  describe('findOne()', () => {
    it('should return a user by id', async () => {
      const userId = '1';
      jest.spyOn(service, 'findOne').mockImplementation(async (id: string) => {
        if (id === userId) {
          return USER_MOCK;
        }
        return null;
      });
      const result = await service.findOne(userId);
      expect(result).toEqual(USER_MOCK);
    });
  });

  describe('create()', () => {
    it('should create a new user', async () => {
      jest
        .spyOn(service, 'create')
        .mockImplementation(async (user: CreateUserDto) => {
          return USER_MOCK;
        });
      const result = await service.create(USER_MOCK);
      expect(result).toEqual(USER_MOCK);
    });
  });
});
