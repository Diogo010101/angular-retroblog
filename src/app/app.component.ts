import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { AppSmallmorecardComponent } from './components/app-smallmorecard/app-smallmorecard.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule, RouterOutlet, MenuBarComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent, AppSmallmorecardComponent, HomeComponent, ContentComponent]
})
export class AppComponent {
  title = 'angular-blog';
}
