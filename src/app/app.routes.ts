import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { Dashboard } from './pages/dashboard/dashboard';
import { Contador } from './components/contador/contador';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/blog'},
    {path: 'blog', component: Blog},
    {path: 'contador', component: Contador},
    {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.routes').then(m => m.ROUTES)}
];
