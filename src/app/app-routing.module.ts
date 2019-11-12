import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { BlogComponent } from './blog/blog.component'
import { TravelsComponent } from './travels/travels.component'


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "travels", component: TravelsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
