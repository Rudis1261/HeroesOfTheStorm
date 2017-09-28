import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-match-helper',
  templateUrl: './match-helper.component.html',
  styleUrls: ['./match-helper.component.scss']
})
export class MatchHelperComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Heroes of the Storm ZA | Match Assistant');
  }

  ngOnInit() {
  }

}
