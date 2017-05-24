import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  search_placeholder: any = 'Find a hero by name';

  constructor(private http:Http) {
    this.http.get('assets/feeds/heroes.json').subscribe((data) => {
      this.heroes = data.json();
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

  find(hero) {
    if (!this.search) {
      return false;
    }

    let search = this.search.toLowerCase();

    return (hero.slug.indexOf(search) != -1) ||
           (hero.name.toLowerCase().indexOf(search) != -1) ||
           (hero.title.toLowerCase().indexOf(search) != -1) ||
           (hero.role.slug.indexOf(search) != -1) ||
           (hero.type.slug.indexOf(search) != -1);
  }
}
