import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FIREBASE_PROVIDERS, AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/about.component';
import { LoadingBar } from './loading.component';
import { NavHeaderComponent } from './nav-header.component';
import { NavFooterComponent } from './nav-footer.component';
import { AuthGuard } from './auth.service';

import { LazyComponent } from './lazy.component';
import { KeysPipe } from './keys-pipe.component';
import { LimitToPipe } from './limit-to-pipe.component';
import { LinkifyPipe } from './linkify.component';
import { SafePipe } from './safe.component';
import { SanitizeHtmlPipe } from './sanitize.component';
import { OrderByPipe } from './order-by.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { MatchHelperComponent } from './match-helper/match-helper.component';
import { MapsComponent } from './maps/maps.component';
import { UcfirstPipe } from './ucfirst.pipe';
import { StrtolowerPipe } from './strtolower.pipe';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyA1N7Ju8sX_Hr0QGugmyL9qFdpINmGwqNg",
  authDomain: "heroes-9921d.firebaseapp.com",
  databaseURL: "https://heroes-9921d.firebaseio.com",
  storageBucket: "heroes-9921d.appspot.com",
  messagingSenderId: "15381434532"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocialComponent,
    AboutComponent,
    LoadingBar,
    NavHeaderComponent,
    NavFooterComponent,
    KeysPipe,
    LimitToPipe,
    LinkifyPipe,
    SafePipe,
    SanitizeHtmlPipe,
    OrderByPipe,
    HeroesComponent,
    MatchHelperComponent,
    LazyComponent,
    MapsComponent,
    UcfirstPipe,
    StrtolowerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FIREBASE_PROVIDERS,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
