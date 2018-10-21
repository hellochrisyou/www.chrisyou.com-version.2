import { BrowserModule } from '@angular/platform-browser';

import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {
  constructor(private smooth: SimpleSmoothScrollService) { }
 
  ngOnInit() {
    this.smooth.smoothScrollToTop();
  }
  
  goTop(){
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }
}

