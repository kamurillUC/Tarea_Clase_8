import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurant.interface';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public restaurant: Restaurant = {
    name: '',
    stars: 0,
    address: '',
    status: 'Abierto',
    color: true
  };

 

  public onSubmit(){

    this.restaurant.dateCreated = new Date();
    console.log(this.restaurant);
    this._restaurantService.restaurants.push({...this.restaurant});
    console.log(this._restaurantService.restaurants);
    alert("El restaurante ha sido creado exitosamente");
  }

  constructor(private _restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

}
