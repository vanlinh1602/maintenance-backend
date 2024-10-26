import { Optional } from 'sequelize';

import { Request } from '../database/requests.entity';

export interface IRequest {
  id: string;
  type: string;
  description: string;
  notes: {
    userId: string;
    message: string;
    timestamp: number;
  }[];
  status: string;
  createdDate: number;
  completedDate: number;
  creator: string;
  assignedTo: string;
  deviceId: string;
}

export type IRequestCreate = Optional<IRequest, 'id'>;

export interface IRequestService {
  getRequest: (filter: Partial<IRequest>) => Promise<Request>;
  getRequests: () => Promise<Request[]>;
  createRequest: (request: Partial<IRequest>) => Promise<Request>;
  updateRequest: (id: string, request: Request) => Promise<boolean>;
  deleteRequest: (requestId: string) => Promise<boolean>;
}
