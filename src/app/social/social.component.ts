import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { KeysPipe } from '../keys-pipe.component';
import { SafePipe } from '../safe.component';
import { LinkifyPipe } from '../linkify.component';
import { OrderByPipe } from '../order-by.pipe';

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

  constructor(private af: AngularFire) {
    this.streamers = [];
    this.tweets = [];
  }

  time2str(ts) {
    ts = (ts * 1000);
    return moment(ts).fromNow();
  }

  ngOnInit() {
    this.twitterHandler = this.af.database.list('/twitter', {
      query: {
        orderByChild: 'id',
        limitToLast: 30
      }
    });

    this.twitterHandler.subscribe((data) => {
      this.tweets = data;
    });

    this.twitchHandler = this.af.database.list('/twitch');
    this.twitchHandler.subscribe((data) => {
      this.streamers = data;
    });
  }
}
