import { Optional } from 'sequelize';

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthdate: number;
  gender: string;
  address: string;
  citizenId: string;
  roleId: string;
  avatar: string;
}

export type IUserCreate = Optional<IUser, 'id'>;
