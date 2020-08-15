import { Request, Response } from 'express';
import {
  getProjectById
} from './service';
import { HttpStatusCode } from '../../commons/constants';
import { Paths } from './utils'
export default [
  
  {
    path: Paths.GetById,
    method: 'get',
    handler: [
      async ( { params }:Request, res:Response): Promise<void> => {
        const result = await getProjectById(params.id)
        res.status(HttpStatusCode.Ok).send(result)
      }
    ]
  }
];
