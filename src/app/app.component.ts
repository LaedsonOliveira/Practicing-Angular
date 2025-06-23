import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainPageComponent } from "./components/main-page/main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, SidebarComponent, FooterComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-praticing-angular';
}
