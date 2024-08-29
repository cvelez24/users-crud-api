import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { UserRole } from 'src/user/schemas/user.schema';

export const userRoleMock: UserRole = 'GUEST';

export const USER_MOCK: CreateUserDto = {
  name: 'Juan',
  lastName: 'Velez',
  email: 'jv@mail.com',
  phone: '23425141414',
  role: userRoleMock,
};

export const USERS_MOCK: CreateUserDto[] = [
    {
      name: 'Juan',
      lastName: 'Velez',
      email: 'jv@mail.com',
      phone: '23425141414',
      role: 'COMMON_USER',
    },
    {
      name: 'Pedro',
      lastName: 'Velez',
      email: 'jv@mail.com',
      phone: '23425141414',
      role: 'COMMON_USER',
    },
  ];
