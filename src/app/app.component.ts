import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  prod = [['Moto G5',2],['Racold Geyser',3]];
  showDetails: boolean = false;
  new_added=[];
  printAdded(res) {
  this.new_added=res;
  this.prod.push(res);
  this.showDetails = true;
  }
}
