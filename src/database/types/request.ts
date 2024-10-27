import { Optional } from 'sequelize';

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
