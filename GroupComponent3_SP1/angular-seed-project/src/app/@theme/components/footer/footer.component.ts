import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b>Space Monkeys</b> 2018</span>    
    <span class="social-media"> Follow us <img src="facebook_icon.ico">    <img src="instagram.png"></span>   
  `
})
export class FooterComponent {}
