import { Request, Response } from 'express';
import {
  getDepartmentById,
  createDepartment,
  updateDepartmentById,
  deleteDepartmentById
} from './service';
import { HttpStatusCode } from '../../commons/constants';
import { Paths } from './utils'
export default [
  {
    path: Paths.GetById,
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getDepartmentById(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      }
    ]
  },
  {
    path: Paths.CreateDepartment,
    method: 'post',
    handler: [
      async ( {body}:Request, res:Response ): Promise<void> => {
        const result = await createDepartment(body)
        res.status(HttpStatusCode.Created).send(result)
      }
    ]
  },
  {
    path: Paths.Put,
    method: 'put',
    handler: [
      async ({ params,body }: Request, res: Response): Promise<void> => {
        const result = await updateDepartmentById(params.id,body);
        res.status(HttpStatusCode.Ok).send(result);
      }
    ]
  },
  {
    path: Paths.Delete,
    method: 'delete',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await deleteDepartmentById(params.id);
        res.status(HttpStatusCode.NoContent).send();
      }
    ]
  }
];
