import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CiaoGianniComponent } from './home/ciao-gianni/ciao-gianni.component';
import { AltreInfoComponent } from './home/altre-info/altre-info.component';
import { SliderComponent } from './home/slider/slider.component';
import { SocialComponent } from './home/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CiaoGianniComponent,
    AltreInfoComponent,
    SliderComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
