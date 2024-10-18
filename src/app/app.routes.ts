import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  {path:'logIn', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'errorPage', component:ErrorPageComponent},
  {path:'**', redirectTo:"/errorPage", pathMatch:'full'},


  

];
