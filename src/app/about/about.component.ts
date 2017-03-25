import { Component, OnInit } from '@angular/core';
import { SafePipe } from '../safe.component';
import { SanitizeHtmlPipe } from '../sanitize.component';
import { LimitToPipe } from '../limit-to-pipe.component';
import { OrderByPipe } from '../order-by.pipe';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  constructor(private af: AngularFire) {
    this.title = "About the Game";
    this.subTitle = "Heroes of the Storm"
  }

  ngOnInit() {
    this.aboutContent = this.af.database.list('/about');
    this.aboutContent.subscribe((data) => {
      this.content = data;
      this.loaded = true;
    });
  }
}
