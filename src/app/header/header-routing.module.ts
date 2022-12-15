import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { RouteGuard } from '../shared/guard/route.guard';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then((m) => m.IndexModule),
        canActivate: [RouteGuard],
      },

      {
        path: 'why-zeekart',
        loadChildren: () =>
          import('./why-zeekart/why-zeekart.module').then(
            (m) => m.WhyZeekartModule
          ),
        canActivate: [RouteGuard],
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
        canActivate: [RouteGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
