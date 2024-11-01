import { Inject, Injectable } from '@nestjs/common';
import { IRequest } from 'src/database/types/request';

import { Request } from '../../../database/models/requests.entity';
import { IRequestService } from '../interfaces/requests.service.interface';

@Injectable()
export class RequestService implements IRequestService {
  constructor(
    @Inject('REQUEST_REPOSITORY')
    private requestRepository: typeof Request,
  ) {}

  async getRequest(id: string): Promise<Request> {
    return this.requestRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getRequestByFilter(filter: Partial<IRequest>): Promise<Request[]> {
    return this.requestRepository.findAll({
      where: filter,
    });
  }

  async getRequests(): Promise<Request[]> {
    return this.requestRepository.findAll();
  }

  async createRequest(request: Partial<IRequest>): Promise<Request> {
    return this.requestRepository.create(request);
  }

  async updateRequest(id: string, request: Partial<Request>): Promise<boolean> {
    const updated = await this.requestRepository.update(request, {
      where: {
        id,
      },
    });
    return updated[0] > 0;
  }

  async deleteRequest(requestId: string): Promise<boolean> {
    const deleted = await this.requestRepository.destroy({
      where: {
        id: requestId,
      },
    });
    return deleted > 0;
  }
}
