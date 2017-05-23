import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  maps: any = false;
  image_height: any = "100%";
  image_width: any = "auto";

  constructor(private http:Http) {
    this.http.get('assets/feeds/maps.json').subscribe((data) => {
      this.maps = data.json();
    });
  }

  ngOnInit() {}
}
