import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent } from './budget/budget.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'budget', component: BudgetComponent},
     
];
