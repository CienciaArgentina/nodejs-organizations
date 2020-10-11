import { Request, Response } from 'express';
import {
  getById,
  getOrganizations,
  createOrganization,
  patchOrgnization,
  addUserToOrganization
} from './service';
import { HttpStatusCode } from '../../commons/constants';
import { Paths } from './utils'
export default [
 {
   path:Paths.Get,
   method: 'get',
   handler: [
     async ({query}: Request, res: Response): Promise<void> => {
       //console.log(res.locals.jwt)
       const result = await getOrganizations(query);
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
    path: Paths.PostProfile,//TODO: Cruce de responsabilidades, mal, pero MVP
    method: 'post',
    handler: [
      async ( { params,body }: Request, res: Response): Promise<void> => {
        const result = await addUserToOrganization(params.id,body);
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
