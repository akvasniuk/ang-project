import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode")
  }


}
