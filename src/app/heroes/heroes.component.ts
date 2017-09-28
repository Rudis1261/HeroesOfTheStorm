import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:any = false;
  image_width: any = '100%';
  image_height: any = '100%';
  search: any = '';
  activeClassSelection: any = false;
  search_placeholder: any = 'Find a hero by name';
  roles: Array<String>;
  selected: any = false;
  heroDescription: any = false;
  heroStats: any = false;

  constructor(private http:Http, private af: AngularFire, private titleService: Title) {
    this.titleService.setTitle('Heroes of the Storm ZA | Heroes');

    this.http.get('assets/feeds/heroes.json').subscribe((data) => {
      this.heroes = data.json();
      //console.log(this.heroes);
    });

    this.roles = [
      'Assassin',
      'Warrior',
      'Support',
      'Specialist'
    ];
  }

  ngOnInit() {
  }

  searchByRole(role) {
    //console.log('Search by role', role);
    if (this.activeClassSelection == role) {
      this.activeClassSelection = false;
    } else {
      this.activeClassSelection = role;
    }
  }

  select(hero) {
    if(!hero) {
      return false;
    }

    this.heroDescription = false;
    this.heroStats = false;

    if (hero == this.selected) {
      return this.deselect();
    }

    this.selected = hero;
    
    this.af.database.object('/hero/' + hero.slug + '/description').subscribe((data) => {
      this.heroDescription = data.$value;
    });

    this.af.database.object('/hero/' + hero.slug + '/stats').subscribe((data) => {
      this.heroStats = data;
    });
  }

  deselect() {
    this.selected = false;
    //console.log("DESELECTED", this.selected);
  }

  find(hero) {
    if (!this.search && !this.activeClassSelection) {
      return false;
    }

    let search = (this.search && this.search !== '') ? this.search.toLowerCase() : false;
    let role = (this.activeClassSelection) ? this.activeClassSelection.toLowerCase() : false;
    let foundSearchTerm = false;
    let foundRoleSearch = false;

    if (search) {
      foundSearchTerm = (hero.slug.indexOf(search) != -1) ||
                         (hero.name.toLowerCase().indexOf(search) != -1) ||
                         (hero.title.toLowerCase().indexOf(search) != -1) ||
                         (hero.role.slug.indexOf(search) != -1) ||
                         (hero.type.slug.indexOf(search) != -1);
    }

    if (role) {
      foundRoleSearch = (hero.role.slug.indexOf(role) != -1);
    }

    if (search && role) {
      return foundRoleSearch && foundSearchTerm;
    }

    if (search && !role) {
      return foundSearchTerm;
    }

    if (!search && role) {
      return foundRoleSearch;
    }
  }
}
