import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IRequest } from '../interfaces/requests.service.interface';
import { RequestService } from '../services/requests.service';

@Controller()
export class RequestApiController {
  constructor(private readonly requestServices: RequestService) {}

  @Get('/get/all')
  async getRequests(): Promise<IRequest[]> {
    const requests = await this.requestServices.getRequests();
    return requests.map((request) => request.dataValues);
  }

  @Get('/get/:id')
  async getRequest(@Param('id') id: string): Promise<IRequest> {
    const request = await this.requestServices.getRequest({ id });
    return request.dataValues;
  }

  @Post('/get')
  async getRequestByFilter(@Body() filter: Partial<IRequest>): Promise<IRequest> {
    const request = await this.requestServices.getRequest(filter);
    return request.dataValues;
  }

  @Post('/create')
  async createRequest(
    @Body() data: { request: Partial<IRequest> },
  ): Promise<IRequest> {
    const newRequest = await this.requestServices.createRequest(data.request);
    return newRequest.dataValues;
  }

  @Post('/update')
  async updateRequest(
    @Body() data: { id: string; request: IRequest },
  ): Promise<{ success: boolean }> {
    const success = await this.requestServices.updateRequest(
      data.id,
      data.request,
    );
    return { success };
  }

  @Post('/delete')
  async deleteRequest(
    @Body() data: { id: string },
  ): Promise<{ success: boolean }> {
    const success = await this.requestServices.deleteRequest(data.id);
    return { success };
  }
}
