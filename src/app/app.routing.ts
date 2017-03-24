import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route componenets
import { HomeComponent }        from './home/home.component';
import { SocialComponent }      from './social/social.component';
import { AboutComponent }       from './about/about.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'social',
  component: SocialComponent
}, {
  path: 'about-the-game',
  component: AboutComponent
}];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
