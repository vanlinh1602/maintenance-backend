import { Inject, Injectable } from '@nestjs/common';

import { Staff } from '../database/staffs.entity';
import { IStaff, IStaffService } from '../interfaces/staffs.service.interface';

@Injectable()
export class StaffService implements IStaffService {
  constructor(
    @Inject('STAFF_REPOSITORY')
    private staffRepository: typeof Staff,
  ) {}

  async getStaff(filter: Partial<IStaff>): Promise<Staff> {
    return this.staffRepository.findOne({
      where: filter,
    });
  }

  async getStaffs(): Promise<Staff[]> {
    return this.staffRepository.findAll();
  }

  async createStaff(staff: Partial<IStaff>): Promise<Staff> {
    return this.staffRepository.create(staff);
  }

  async updateStaff(id: string, staff: Partial<Staff>): Promise<boolean> {
    const updated = await this.staffRepository.update(staff, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteStaff(staffId: string): Promise<boolean> {
    const deleted = await this.staffRepository.destroy({
      where: {
        id: staffId,
      },
    });
    return deleted > 0;
  }
}
