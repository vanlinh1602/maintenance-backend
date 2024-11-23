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
  shecduledDate: number;
  completedDate: number;
  creator: string;
  assignedTo: string;
  deviceId: string;
  priority: string;
  replacementDeviceId: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRequestCatalog {
  id: string;
  name: string;
  type: 'type' | 'status';
  color?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IRequestCreate = Optional<IRequest, 'id'>;
export type IRequestCatalogCreate = Optional<IRequestCatalog, 'id'>;
