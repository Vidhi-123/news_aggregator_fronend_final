import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { AngularFireModule } from "angularfire2";
export const firebaseConfig = environment.firebaseConfig;
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewsService } from "./service/news.service";
import { WeatherService} from "./service/weather.service";
import { CountryService } from "./service/country.service"
import { BusinessComponent } from './component/business/business.component';
import { EntertainmentComponent } from './component/entertainment/entertainment.component';
import { GeneralComponent } from './component/general/general.component';
import { HealthComponent } from './component/health/health.component';
import { ScienceComponent } from './component/science/science.component';
import { SportsComponent } from './component/sports/sports.component';
import { TechnologyComponent } from './component/technology/technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './component/weather/weather.component';

import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { environment } from 'src/environments/environment';
import { GoogleMapComponent } from './component/google-map/google-map.component';
import { DesignComponent } from './component/design/design.component';
import { InterestComponent } from './component/interest/interest.component';
import { AddSourcePageComponent } from './component/add-source-page/add-source-page.component';
import { SourcePageDetailComponent } from './component/source-page-detail/source-page-detail.component';
import { DesignForNewsComponent } from './component/design-for-news/design-for-news.component';
import { CountryComponent } from './component/country/country.component';
import { CountrycatComponent } from './component/countrycat/countrycat.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

import { LikedpostsComponent } from './component/likedposts/likedposts.component';

import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { SliderComponent } from './component/slider/slider.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { TodoComponent } from './todo/todo.component';
import { SlideComponent } from './slide/slide.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    WeatherComponent,
    GoogleMapComponent,
    DesignComponent,
    InterestComponent,
    AddSourcePageComponent,
    SourcePageDetailComponent,
    DesignForNewsComponent,

    CountryComponent,
    CountrycatComponent,
    LoginComponent,
    SignupComponent,
    LikedpostsComponent,
    SliderComponent,
    TodoComponent,
    SlideComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatFormFieldModule,
    JwSocialButtonsModule,


    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey:environment.googleMapsApi
    })

  ],
  providers: [NewsService,WeatherService,CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
