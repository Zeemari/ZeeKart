import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RouteGuard } from '../shared/guard/route.guard';
import { ChildRouteGuard } from '../shared/guard/child-route.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./index/index.module').then((m) => m.IndexModule),
      //   canActivate: [RouteGuard],
      // },
      {
        path: '',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
        canActivate: [RouteGuard],
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./add-product/add-product.module').then(
            (m) => m.AddProductModule
          ),
        canActivate: [RouteGuard],
      },
      {
        path: 'products/product-details',
        loadChildren: () =>
          import('./products/product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
        canActivateChild: [ChildRouteGuard],
      },
      {
        path: 'all-products',
        loadChildren: () =>
          import('./all-products/all-products.module').then(
            (m) => m.AllProductsModule
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
export class DashboardRoutingModule {}
