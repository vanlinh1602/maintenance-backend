import { Optional } from 'sequelize';

import { Staff } from '../database/staffs.entity';

export interface IStaff {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthdate: number;
  gender: string;
  address: string;
  citizenId: string;
  roleId: string;
}

export type IStaffCreate = Optional<IStaff, 'id'>;

export interface IStaffService {
  getStaff: (filter: Partial<IStaff>) => Promise<Staff>;
  getStaffs: () => Promise<Staff[]>;
  createStaff: (staff: Partial<IStaff>) => Promise<Staff>;
  updateStaff: (id: string, staff: Staff) => Promise<boolean>;
  deleteStaff: (staffId: string) => Promise<boolean>;
}
