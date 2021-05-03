import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
  { path: 'build', loadChildren: () => import('./pages/build/build.module').then((m) => m.BuildModule) },
  { path: '**', loadChildren: () => import('./pages/error/error.module').then((m) => m.ErrorModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
