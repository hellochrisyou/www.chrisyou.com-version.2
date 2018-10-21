import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [NgbCarouselConfig]
})
export class PortfolioComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 0; 
  }
  ngOnInit() {
  }

}
