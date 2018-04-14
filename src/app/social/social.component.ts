import { Component, OnInit } from '@angular/core';
import { KeysPipe } from '../keys-pipe.component';
import { SafePipe } from '../safe.component';
import { LinkifyPipe } from '../linkify.component';
import { OrderByPipe } from '../order-by.pipe';
import { Title } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase';

declare var moment: any;

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  tweets: any;
  twitterHandler: any;
  twitchHandler: any;
  streamers: any;

  constructor(private af: AngularFireDatabase, private titleService: Title) {
    this.titleService.setTitle('Heroes of the Storm ZA | Social');
    this.streamers = [];
    this.tweets = [];
  }

  time2str(ts) {
    ts = (ts * 1000);
    return moment(ts).fromNow();
  }

  ngOnInit() {
    this.twitterHandler = this.af.list('/twitter', ref => ref.orderByChild('id').limitToLast(30)).valueChanges();

    this.twitterHandler.subscribe((data) => {
      this.tweets = data;
    });

    this.twitchHandler = this.af.list('/twitch').valueChanges();
    this.twitchHandler.subscribe((data) => {
      this.streamers = data;
    });
  }
}
