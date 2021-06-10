import {Component, Input} from '@angular/core';
import {ICar} from "../../interface";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {
  @Input()
  car:ICar
}
