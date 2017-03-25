import { Component } from '@angular/core';

@Component({
  selector: 'loading',
  template: `
  <div class="loading-bar" *ngIf="loading">
  	<div class="bar">&nbsp;</div>
  	<div class="loader">
      <div class="loading">
        <div class="loading-inner">
          <div>
            <img class="loading-logo" src="/assets/img/large_icon.png" alt="HOTS" />
          </div>
          <div class="loading-title">
            <span><small>Loading...</small></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class LoadingBar {
  loading = true;
}
