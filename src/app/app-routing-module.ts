import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    component: HomeComponent
}
];

export const AppRouterModule = RouterModule.forRoot(routes);