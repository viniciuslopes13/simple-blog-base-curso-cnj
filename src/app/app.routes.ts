import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/blog'},
    {path: 'blog', component: Blog},
    {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.routes').then(m => m.ROUTES)}
];
