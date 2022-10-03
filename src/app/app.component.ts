import { Component } from '@angular/core';

import { ProductService } from './shared/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentData = new Date();

  arr = this.productService.arr;

  background = '';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.dataCheck();
  }

  dataCheck(): void {
    const [month, day, year] = [this.currentData.getMonth(), this.currentData.getDate(), this.currentData.getFullYear()];
    this.arr.forEach(elem => {
      if (elem.expiration.yyyy <= year || elem.expiration.yyyy === year) {
        if (elem.expiration.mm === month || elem.expiration.dd === day + 1 || elem.expiration.dd === day + 2) {
          elem.expirationColor = 'background:yellow';
        }
        else if (elem.expiration.mm === month || elem.expiration.mm < month) {
          elem.expirationColor = 'background:red';
        }
      }
    })
  }
}
