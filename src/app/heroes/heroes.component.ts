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
}
