import { Request, Response } from 'express';
import { getById,getOrganizations,getDepartmentById,createOrganization } from './service';
import { HttpStatusCode } from '../../commons/constants';

export default [
  {
    path: '/organizations/:id',
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        const result = await getById(req.params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/organizations',
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        const result = await getOrganizations(req.params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/organizations',
    method: 'post',
    handler: [
      async ( req: Request, res: Response): Promise<void> => {
        console.log(req);
        const result = await createOrganization(req.body);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/departments/:id',
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        const result = await getDepartmentById(req.params.id);
        res.status(HttpStatusCode.Ok).send(result);
      }
    ]
  },
  {
    path: '/ping',
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        res.status(HttpStatusCode.Ok).send('pong');
      },
    ],
  },
];
