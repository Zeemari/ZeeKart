import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './shared/guard/route.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [RouteGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [RouteGuard],
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/f-password/f-password.module').then(
        (m) => m.FPasswordModule
      ),
    canActivate: [RouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
