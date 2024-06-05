import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { User, UserRole } from './../../schemas/user.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

const userServiceMock = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  deleteById: jest.fn(),
};

const userMock = {
  name: 'Juan',
  lastName: 'Velez',
  email: 'jv@mail.com',
  phone: '23425141414',
  role: UserRole.GUEST,
};
describe('UserService', () => {
  let service: UserService;
  let userModelMock = Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    })
      .overrideProvider(getModelToken(User.name))
      .useValue(jest.fn())
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be define', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should find all users', () => {
      const result = service.findAll();

      userServiceMock.findAll.mockResolvedValue(userModelMock);

      expect(result).toEqual(userMock);
    });
  });
});
