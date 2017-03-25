import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'nav-footer',
  template: `
  <div class="container trademark-notice">
    *All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement not ownership.
    <br><br>
  </div>
	<footer>
		<div class="container">
      <a
        class="powered"
        href="https://angular.io"
        title="Powered by AngularJS 2"
        target="_blank"
      >&nbsp;</a>
      <a href="http://firebase.google.com/" target="_blank" title="Proudly running on Firebase">
        <img
          src="assets/img/lockup.png"
          alt="Firebase"
        />
      </a>
    </div>
  </footer>
`
})
export class NavFooterComponent {
  host = window.HOST;
}