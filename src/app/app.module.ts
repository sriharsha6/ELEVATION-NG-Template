import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "./shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { BannerComponent } from "./components/banner/banner.component";
import { GreatVelComponent } from "./components/great-vel/great-vel.component";
import { HydrogenComponent } from "./components/hydrogen/hydrogen.component";
import { HoweverComponent } from "./components/however/however.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BannerComponent,
    GreatVelComponent,
    HydrogenComponent,
    HoweverComponent,
    ContactUsComponent,
    FooterComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
