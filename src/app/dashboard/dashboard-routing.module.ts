import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';

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
        canActivate: [AuthGuard],
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./add-product/add-product.module').then(
            (m) => m.AddProductModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'products/product-details',
        loadChildren: () =>
          import('./products/product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'all-products',
        loadChildren: () =>
          import('./all-products/all-products.module').then(
            (m) => m.AllProductsModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
