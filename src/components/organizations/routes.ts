import { Request, Response } from 'express';
import {
  getById,
  getOrganizations,
  getMyOrganizations,
  createOrganization,
  patchOrgnization,
  //departments
  getDepartmentById,
  //projects
  getProjectById
} from './service';
import { HttpStatusCode } from '../../commons/constants';

export default [
  /*TODO:
    tabla organizaciones-usuario (a mano)
    ver mis organizaciones
    /organizations/me ?
    /organizations + headers ?
  */
 {
   path:'/organizations/me',
   method: 'get',
   handler: [
     async (req: Request, res: Response): Promise<void> => {
       const result = await getMyOrganizations();
       res.status(HttpStatusCode.Ok).send(result)
     }
   ]
 },
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
    path: '/projects/:id',
    method: 'get',
    handler: [
      async ( { params }:Request, res:Response): Promise<void> => {
        const result = await getProjectById(params.id)
        res.status(HttpStatusCode.Ok).send(result)
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
