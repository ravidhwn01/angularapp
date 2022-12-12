import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  date = new Date();
  name = "Ravi Kumar Dhawan";
  address = {
    city: "Delhi",
    state: "Delhi",
    country: "India"
  }
}
