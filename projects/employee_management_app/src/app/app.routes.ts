import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children: [     
            {
                path:'master',
                component:MasterComponent,
                canActivate:[authGuard]
            },
            {
                path:'employee',
                component:EmployeeComponent,
                canActivate:[authGuard]
            },
            {
                path:'client',
                component:ClientComponent,
                canActivate:[authGuard]
            },
            {
                path:'client-project',
                component:ClientProjectComponent,
                canActivate:[authGuard]
            },
        ]
    },
];
