import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IStaff } from '../interfaces/staffs.service.interface';
import { StaffService } from '../services/staffs.service';

@Controller()
export class StaffApiController {
  constructor(private readonly staffServices: StaffService) {}

  @Get('/get/all')
  async getStaffs(): Promise<IStaff[]> {
    const staffs = await this.staffServices.getStaffs();
    return staffs.map((staff) => staff.dataValues);
  }

  @Get('/get/:id')
  async getStaff(@Param('id') id: string): Promise<IStaff> {
    const staff = await this.staffServices.getStaff({ id });
    return staff.dataValues;
  }

  @Post('/get')
  async getStaffByFilter(@Body() filter: Partial<IStaff>): Promise<IStaff> {
    const staff = await this.staffServices.getStaff(filter);
    return staff.dataValues;
  }

  @Post('/create')
  async createStaff(
    @Body() data: { staff: Partial<IStaff> },
  ): Promise<IStaff> {
    const newStaff = await this.staffServices.createStaff(data.staff);
    return newStaff.dataValues;
  }

  @Post('/update')
  async updateStaff(
    @Body() data: { id: string; staff: IStaff },
  ): Promise<{ success: boolean }> {
    const success = await this.staffServices.updateStaff(
      data.id,
      data.staff,
    );
    return { success };
  }

  @Post('/delete')
  async deleteStaff(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.staffServices.deleteStaff(data.id);
    return { success };
  }
}
