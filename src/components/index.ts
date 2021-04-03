import organizationsRoutes from './organizations/routes';
import departmentsRoutes from './departments/routes';
import projectsRoutes from './projects/routes';

export default [
	...organizationsRoutes,
	...departmentsRoutes,
	...projectsRoutes
];
