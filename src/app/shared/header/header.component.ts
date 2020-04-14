import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
title: string = 'Coins App'
tasa: any;
constructor(private header: HeaderService) {
  this.header.getJSON().subscribe(data => {
    for(let result of data){
      this.tasa =data[0].valor;
      break;
    }
 });

}

}