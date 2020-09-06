import { Request, Response } from 'express';
import {
  getById,
  getOrganizations,
  getMyOrganizations,
  createOrganization,
  patchOrgnization,
} from './service';
import { HttpStatusCode } from '../../commons/constants';
import { Paths } from './utils'
export default [
 {
   path:Paths.Me,
   method: 'get',
   handler: [
     async (req: Request, res: Response): Promise<void> => {
       const result = await getMyOrganizations();
       res.status(HttpStatusCode.Ok).send(result)
     }
   ]
 },
  {
    path: Paths.GetById,
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getById(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: Paths.GetById,
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getOrganizations(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: Paths.Post,
    method: 'post',
    handler: [
      async ( { body }: Request, res: Response): Promise<void> => {
        const result = await createOrganization(body);
        res.status(HttpStatusCode.Created).send(result);
      },
    ],
  },
  {
    path: Paths.Patch,
    method: 'patch',
    handler: [
      async ( req: Request, res: Response): Promise<void> => {
        const result = await patchOrgnization(req.params.id, req.body);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
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
