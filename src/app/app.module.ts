import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from "./shared/shared.module";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { BannerComponent } from "./components/banner/banner.component";
import { GreatVelComponent } from './components/great-vel/great-vel.component';
import { HydrogenComponent } from './components/hydrogen/hydrogen.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, BannerComponent, GreatVelComponent, HydrogenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
