import { Request, Response } from 'express';
import {
  getById,
  getOrganizations,
  getDepartmentById,
  createOrganization,
  patchOrgnization
} from './service';
import { HttpStatusCode } from '../../commons/constants';

export default [
  {
    path: '/organizations/:id',
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getById(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/organizations',
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getOrganizations(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/organizations',
    method: 'post',
    handler: [
      async ( { body }: Request, res: Response): Promise<void> => {
        const result = await createOrganization(body);
        res.status(HttpStatusCode.Created).send(result);
      },
    ],
  },
  {
    path: '/organizations/:id/',
    method: 'patch',
    handler: [
      async ( req: Request, res: Response): Promise<void> => {
        const result = await patchOrgnization(req.params.id, req.body);
        res.status(HttpStatusCode.Created).send(result);
      },
    ],
  },
  {
    path: '/departments/:id',
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getDepartmentById(params.id);
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
