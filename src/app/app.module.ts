import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ImagetoolsComponent } from './imagetools/imagetools.component';
import { CodingtoolsComponent } from './codingtools/codingtools.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    TestimonialComponent,
    FeatureComponent,
    AboutusComponent,
    ImagetoolsComponent,
    CodingtoolsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
