import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),
  },
  {
    path: 'catalog',
    loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule),
  },
  {
    path: 'group-buying',
    loadChildren: () => import('./modules/group-buying/group-buying.module').then(m => m.GroupBuyingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
