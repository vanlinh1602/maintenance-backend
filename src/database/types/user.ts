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
  roomId: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IUserCreate = Optional<IUser, 'id'>;
