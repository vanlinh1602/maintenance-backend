import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IRole } from '../interfaces/roles.service.interface';
import { RoleService } from '../services/roles.service';

@Controller()
export class RoleApiController {
  constructor(private readonly roleServices: RoleService) {}

  @Get('/get/all')
  async getRoles(): Promise<IRole[]> {
    const roles = await this.roleServices.getRoles();
    return roles.map((role) => role.dataValues);
  }

  @Get('/get/:id')
  async getRole(@Param('id') id: string): Promise<IRole> {
    const role = await this.roleServices.getRole({ id });
    return role.dataValues;
  }

  @Post('/get')
  async getRoleByFilter(@Body() filter: Partial<IRole>): Promise<IRole> {
    const role = await this.roleServices.getRole(filter);
    return role.dataValues;
  }

  @Post('/create')
  async createRole(@Body() data: { role: Partial<IRole> }): Promise<IRole> {
    const newRole = await this.roleServices.createRole(data.role);
    return newRole.dataValues;
  }

  @Post('/update')
  async updateRole(
    @Body() data: { id: string; role: IRole },
  ): Promise<{ success: boolean }> {
    const success = await this.roleServices.updateRole(data.id, data.role);
    return { success };
  }

  @Post('/delete')
  async deleteRole(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.roleServices.deleteRole(data.id);
    return { success };
  }
}
