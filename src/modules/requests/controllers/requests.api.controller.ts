import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Session,
} from '@nestjs/common';
import { IRequest } from 'src/database/types/request';
import { checkRoles } from 'src/utils/validate';

import { RequestService } from '../services/requests.service';

@Controller()
export class RequestApiController {
  constructor(private readonly requestServices: RequestService) {}

  @Get('/')
  async getRequestByFilter(
    @Query() filter: Partial<IRequest>,
    @Session() session,
  ): Promise<IRequest[]> {
    const allowGetAll = checkRoles(session, ['manager', 'maintenance']);
    if (!Object.keys(filter).length && allowGetAll) {
      const result = await this.requestServices.getRequests();
      return result.map((req) => req.dataValues);
    }
    const dataFilter = { ...filter };
    if (!allowGetAll) {
      dataFilter.creator = session.user.info.id;
    }
    const request = await this.requestServices.getRequestByFilter(dataFilter);
    return request.map((req) => req.dataValues);
  }

  @Post('/')
  async createRequest(
    @Body() data: { request: Partial<IRequest> },
  ): Promise<IRequest> {
    const newRequest = await this.requestServices.createRequest(data.request);
    return newRequest.dataValues;
  }

  @Put('/')
  async updateRequest(
    @Body() data: { id: string; request: IRequest },
  ): Promise<{ success: boolean }> {
    const success = await this.requestServices.updateRequest(
      data.id,
      data.request,
    );
    return { success };
  }

  @Delete('/')
  async deleteRequest(
    @Query() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.requestServices.deleteRequest(data.id);
    return { success };
  }
}
