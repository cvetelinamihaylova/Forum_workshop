import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
    {
        path: 'theme',
        pathMatch: 'full',
        redirectTo: 'theme/list'
    },
    {
        path: 'theme/list',
        component: ThemeComponent
    },
    {
        path: 'theme/detail/:id',
        component: DetailComponent
    },
    {
        path: 'theme/new',
        component: NewComponent
    }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);