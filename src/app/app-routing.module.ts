import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'cart', component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
