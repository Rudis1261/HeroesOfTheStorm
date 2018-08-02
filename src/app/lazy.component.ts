import { Component, OnInit, Input } from '@angular/core';

declare var Image:any;

@Component({
  selector: 'lazy',
  template: `
  <img class="lazy-loader {{style}}" [ngClass]="{'loaded': loaded}" [src]="dataSrc" [style.width]="width" [style.height]="height" alt="image" />
 `,
  styleUrls: ['./lazy.scss']
})
export class LazyComponent implements OnInit {

  @Input() img: any;
  @Input() width: string = "100%";
  @Input() height: string = "auto";
  @Input() async: boolean = false;
  @Input() style: any = false;
  dataSrc: string;
  loaded: any = false;

  constructor() {
    this.dataSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU09B9CgACOQFaAVjiZgAAAABJRU5ErkJggg==";
  }

  getImage(data) {
    var curImg = new Image();
    curImg.src = data;
    curImg.onload = () => {
      this.loaded = true;
      this.dataSrc = data;
    }
  }

  ngOnInit() {
    if (this.async) {
      this.img.then((data) => { this.getImage(data) });
    } else {
      this.getImage(this.img);
    }
  }
}
