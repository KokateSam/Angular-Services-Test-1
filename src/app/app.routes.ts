import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { App } from './app';
import { Home } from './home/home';
//import { Home } from './home/home';
import { Location } from './location/location';

export const routes: Routes = [

    {path:'login',component:Login},
    {path:'Home',component:Home},
    {path:'location',component:Location},
    
   //{path:'Home',loadComponent:()=>import('./home/home').then((c)=>c.Home)},
  // {path:'Admin',component:Admin},
   {path:'Admin',loadComponent:()=>import('./admin/admin').then((c)=>c.Admin)},
   
    { path: '',   redirectTo: '/Home', pathMatch: 'full' }

];
