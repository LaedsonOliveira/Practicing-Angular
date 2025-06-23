import { Component } from '@angular/core';
import { CardProductsComponent } from "../card-products/card-products.component";

@Component({
  selector: 'app-main-page',
  imports: [CardProductsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
