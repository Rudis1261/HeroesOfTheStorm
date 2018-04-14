import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  maps: any = false;
  image_height: any = "100%";
  image_width: any = "auto";

  constructor(private http:Http, private titleService: Title, private af: AngularFireDatabase) {
    this.titleService.setTitle('Heroes of the Storm ZA | Maps');

    this.af.list('/maps').valueChanges().subscribe(data => {
      this.maps = data;
    });
  }

  ngOnInit() {}
}
