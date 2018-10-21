import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule} from '@angular/platform-browser';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {MatButtonModule} from '@angular/material/button';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SoundWaveComponent } from './sound-wave/sound-wave.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    TestimonialComponent,
    SoundWaveComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    VerticalTimelineModule,
    ChartsModule,
    MatCardModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    SimpleSmoothScrollModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
