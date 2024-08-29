import { UserService } from './../../services/user.service';
import { UserController } from '../user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { USER_MOCK } from '../../services/__fixtures__/common';

const userServiceMock = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  deleteById: jest.fn(),
};

describe('UserController', () => {
  let controller: UserController;
  const idMock = 'iuwefw8fgwgfwfbq';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it('should be define', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should be call findAll of the service', () => {
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
      controller.create(USER_MOCK);
      expect(userServiceMock.create).toHaveBeenCalledWith(USER_MOCK);
    });
  });

  describe('update', () => {
    it('should be called update from service', () => {
      controller.update(idMock, USER_MOCK);
      expect(userServiceMock.update).toHaveBeenCalledWith(idMock, USER_MOCK);
    });
  });

  describe('deleteById', () => {
    it('should be called deleteById of the service', () => {
      controller.deleteById(idMock);
      expect(userServiceMock.deleteById).toHaveBeenCalledWith(idMock);
    });
  });
});
