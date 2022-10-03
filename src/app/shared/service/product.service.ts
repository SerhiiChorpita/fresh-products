import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  currentData = new Date();
  day = this.currentData.getDate();
  month = this.currentData.getMonth();
  year = this.currentData.getFullYear();

  afterTomorrow = {
    dd: this.day + 2,
    mm: this.month + 1,
    yyyy: this.year,
  }

  arr = [
    {
      name: 'cheese',
      price: '$13',
      expiration: {
        dd: 13,
        mm: 7,
        yyyy: 2022
      },
      category: 'dairy products',
      expirationColor: ''
    },
    {
      name: 'sausage',
      price: '$21',
      expiration: {
        dd: this.afterTomorrow.dd,
        mm: this.afterTomorrow.mm,
        yyyy: this.afterTomorrow.yyyy
      },
      category: 'dairy products',
      expirationColor: ''
    },
    {
      name: 'butter',
      price: '$15',
      expiration: {
        dd: 7,
        mm: 10,
        yyyy: 2023
      },
      category: 'dairy products',
      expirationColor: ''
    }
  ];

  constructor() { }

}
