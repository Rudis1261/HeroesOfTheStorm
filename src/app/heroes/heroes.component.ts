import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase';

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

  constructor(private http:Http, private af: AngularFireDatabase, private titleService: Title) {
    this.titleService.setTitle('Heroes of the Storm ZA | Heroes');

    this.af.object('/json').valueChanges().subscribe(data => {
      this.http.get(data['heroes_detail_json']).subscribe(data => {
        this.heroes = data.json();
      });
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

    this.af.object('/hero/' + hero.slug + '/description').valueChanges().subscribe(data => {
      this.heroDescription = data;
    });

    this.af.object('/hero/' + hero.slug + '/stats').valueChanges().subscribe(data => {
      this.heroStats = data;
    });
  }

  deselect() {
    this.selected = false;
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
                         (hero.baseHeroInfo.role.slug.indexOf(search) != -1) ||
                         (hero.baseHeroInfo.type.slug.indexOf(search) != -1);
    }

    if (role) {
      foundRoleSearch = (hero.baseHeroInfo.role.slug.indexOf(role) != -1);
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
