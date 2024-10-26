import { Optional } from 'sequelize';

import { Role } from '../database/roles.entity';

export interface IRole {
  id: string;
  name: string;
}

export type IRoleCreate = Optional<IRole, 'id'>;

export interface IRoleService {
  getRole: (filter: Partial<IRole>) => Promise<Role>;
  getRoles: () => Promise<Role[]>;
  createRole: (role: Partial<IRole>) => Promise<Role>;
  updateRole: (id: string, role: Role) => Promise<boolean>;
  deleteRole: (roleId: string) => Promise<boolean>;
}
