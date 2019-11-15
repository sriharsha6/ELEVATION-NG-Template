import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartComponent } from "./pages/cart/cart.component";
import { InPopupComponent } from './components/common/in-popup/in-popup.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "cart", component: CartComponent },
  { path: "pop", component: InPopupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
