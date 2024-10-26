import { Inject, Injectable } from '@nestjs/common';

import { Role } from '../database/roles.entity';
import { IRole, IRoleService } from '../interfaces/roles.service.interface';

@Injectable()
export class RoleService implements IRoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role,
  ) {}

  async getRole(filter: Partial<IRole>): Promise<Role> {
    return this.roleRepository.findOne({
      where: filter,
    });
  }

  async getRoles(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }

  async createRole(role: Partial<IRole>): Promise<Role> {
    return this.roleRepository.create(role);
  }

  async updateRole(id: string, role: Partial<Role>): Promise<boolean> {
    const updated = await this.roleRepository.update(role, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteRole(roleId: string): Promise<boolean> {
    const deleted = await this.roleRepository.destroy({
      where: {
        id: roleId,
      },
    });
    return deleted > 0;
  }
}
