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
  months: any;
  dow: any;

  constructor(private af: AngularFire) {
    this.streamers = [];
    this.tweets = [];

    this.months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };

    this.dow = {
      0: "Sunday",
      1: "Monday",
      2: "Teusday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
  }

  time2str(ts) {
    if (!ts) return '';

    var today = new Date();
    var now = Math.round(today.getTime() / 1000);
    var nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    var date = new Date(ts * 1000);
    var diff = now - ts;

    diff = Math.abs(diff);
    day_diff = Math.floor(diff / 86400);

    if (diff == 0) {
      return 'now';
    }

    if(diff > 0) {
      var day_diff = Math.floor(diff / 86400);
      if(day_diff == 0){
        if(diff < 60) return 'Just now';
        if(diff < 120) return '1 minute ago';
        if(diff < 3600) return Math.floor(diff / 60) + ' minutes ago';
        if(diff < 7200) return '1 hour ago';
        if(diff < 86400) return Math.floor(diff / 360) + ' hours ago';
      }

      if(day_diff == 1) return 'Yesterday';
      if(day_diff < 7) return day_diff + ' days ago';
      if(day_diff < 31) return Math.ceil(day_diff / 7) + ' weeks ago';
      if(day_diff < 60) return 'Last month';

      return this.months[date.getMonth()] + " " + date.getFullYear();
    }

    if(day_diff == 0){
      if(diff < 120) return 'In a minute';
      if(diff < 3600) return 'In ' + Math.floor(diff / 60) + ' minutes';
      if(diff < 7200) return 'In an hour';
      if(diff < 86400) return 'In ' + Math.floor(diff / 3600) + ' hours';
    }

    if(day_diff == 1) return 'Tomorrow';
    if(day_diff < 4) return this.dow[date.getDay()];
    if(day_diff < 7) return 'Next week';
    if(Math.ceil(day_diff / 7) < 4) return 'In ' + Math.ceil(day_diff / 7) + ' weeks';
    if(date.getMonth() == nextMonth.getMonth()) return 'Next month';

    return this.months[date.getMonth()] + " " + date.getFullYear();
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
