import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'nav-header',
  template: `<header>
              <div class="container">
                <!-- BRAND -->
                <ul class="brand clickable" [routerLink]="['/home']">
                  <li class="logo-container">
                    <span class="logo"></span>
                  </li>
                  <li class="brand-name">
                    HeroesOfTheStorm<span class="dot">&nbsp;</span><div>.co.za</div>
                   </li>
                </ul>

                <!-- BURGER MENU -->
                <ul class="menu" (click)="toggleMenu()" [class.open]="menuOpen">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <!-- THE MENU THAT POPS OPEN -->
                <ul class="nav" [class.open]="menuOpen">
                  <li *ngFor="let menuItem of menuItems">
                    <a *ngIf="!menuItem.external" routerLink="{{menuItem.slug}}" [class.active]="menuItem.slug == activeMenu">
                      {{menuItem.label}}
                    </a>
                    <a *ngIf="menuItem.external" target="_blank" href="{{menuItem.slug}}" [class.active]="menuItem.slug == activeMenu">
                      <img *ngIf="menuItem.logo" [src]="menuItem.logo" /> {{menuItem.label}}
                    </a>
                  </li>
                </ul>
              </div>
            </header>`
})
export class NavHeaderComponent {
  menuItems = [{
    "label": "Home",
    "slug": "/home",
    "external": false,
    "logo": false
  }, {
    "label": "Heroes",
    "slug": "/heroes",
    "external": false,
    "logo": false
  }, {
    "label": "Maps",
    "slug": "/maps",
    "external": false,
    "logo": false
  }, {
    "label": "Social",
    "slug": "/social",
    "external": false,
    "logo": false
  }, {
    "label": "About HOTS",
    "slug": "/about-the-game",
    "external": false,
    "logo": false
  }, {
    "label": "Facebook Group",
    "slug": "https://www.facebook.com/groups/hotssa",
    "external": true,
    "logo": "assets/img/58d66ee968cc1.png"
  }];

  menuOpen = false;
  activeMenu = "";

  // Watch for route changes and ensure that the menu is closed
  constructor(router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.menuOpen = false;
        this.activeMenu = "";
      }
      if(event instanceof NavigationEnd) {
        this.activeMenu = event.url;
      }
    });
  }

  // This toggles the menu open state by adding an open class
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
