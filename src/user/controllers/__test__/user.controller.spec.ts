import { UserService } from './../../services/user.service';
import { UserController } from '../user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { UserRole } from './../../schemas/user.schema';
import { CreateUserDto } from './../../dtos/create-user.dto';
import { UpdateUserDto } from './../../dtos/update-user.dto';

const userServiceMock = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  deleteById: jest.fn(),
};

const userDtoMock = {
  name: 'Juan',
  lastName: 'Velez',
  email: 'jv@mail.com',
  phone: '23425141414',
  role: UserRole.GUEST,
};

describe('UserController', () => {
  let controller: UserController;
  const idMock = 'iuwefw8fgwgfwfbq';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: CreateUserDto, useValue: userDtoMock },
        { provide: UpdateUserDto, useValue: userDtoMock },
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it('should be define', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should be call findAll of the service', () => {
      const findAllSpy = jest
        .spyOn(controller['userService'], 'findAll')
        .mockResolvedValue([]);
      controller.findAll();
      expect(userServiceMock.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should be called findOne of the service', () => {
      controller.findOne(idMock);
      expect(userServiceMock.findOne).toHaveBeenCalledWith(idMock);
    });
  });

  describe('create', () => {
    it('should be called create of the service', () => {
      controller.create(userDtoMock);
      expect(userServiceMock.create).toHaveBeenCalledWith(userDtoMock);
    });
  });

  describe('update', () => {
    it('should be called update from service', () => {
      controller.update(idMock, userDtoMock);
      expect(userServiceMock.update).toHaveBeenCalledWith(idMock, userDtoMock);
    });
  });

  describe('deleteById', () => {
    it('should be called deleteById of the service', () => {
      controller.deleteById(idMock);
      expect(userServiceMock.deleteById).toHaveBeenCalledWith(idMock);
    });
  });
});
