import { Component, OnInit } from '@angular/core';
import { SafePipe } from '../safe.component';
import { SanitizeHtmlPipe } from '../sanitize.component';
import { LimitToPipe } from '../limit-to-pipe.component';
import { OrderByPipe } from '../order-by.pipe';
import { Title } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase';

declare var window: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private title = "";
  private subTitle = "";
  private content = {};
  private aboutContent: any;
  private loaded: boolean = false;

  goTo(location): void {
    window.location.hash = "";
    window.location.hash = location;
  }

  constructor(private af: AngularFireDatabase, private titleService: Title) {
    this.title = "About the Game";
    this.subTitle = "Heroes of the Storm"
    this.titleService.setTitle('Heroes of the Storm ZA | About');
  }

  ngOnInit() {
    this.aboutContent = this.af.list('/about').valueChanges();
    this.aboutContent.subscribe((data) => {
      this.content = data;
      this.loaded = true;
    });
  }
}
