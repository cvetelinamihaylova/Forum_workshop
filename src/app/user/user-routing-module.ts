import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'user',
        children:[
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }

    ];
    
    export const UserRoutingModule = RouterModule.forChild(routes);