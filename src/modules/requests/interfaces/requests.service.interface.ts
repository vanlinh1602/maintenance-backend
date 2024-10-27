import { IRequest } from 'src/database/types/request';

import { Request } from '../../../database/models/requests.entity';

export interface IRequestService {
  getRequest: (filter: Partial<IRequest>) => Promise<Request>;
  getRequests: () => Promise<Request[]>;
  createRequest: (request: Partial<IRequest>) => Promise<Request>;
  updateRequest: (id: string, request: Request) => Promise<boolean>;
  deleteRequest: (requestId: string) => Promise<boolean>;
}
