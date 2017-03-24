import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { KeysPipe } from '../keys-pipe.component';
import { SafePipe } from '../safe.component';
import { LinkifyPipe } from '../linkify.component';
import { OrderByPipe } from '../order-by.pipe';

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
  loaded: boolean = false;

  constructor(private af: AngularFire) {
    this.streamers = [];
  }

  ngOnInit() {
    this.twitterHandler = this.af.database.list('/twitter');
    this.twitterHandler.subscribe((data) => {
      this.tweets = data;
      console.log(data);
      this.loaded = true;
    });

    this.twitchHandler = this.af.database.list('/twitch');
    this.twitchHandler.subscribe((data) => {
      this.streamers = data;
      console.log(data);
      this.loaded = true;
    });
  }
}
