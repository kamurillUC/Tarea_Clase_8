import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.interface';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public restaurants: Array<Restaurant> = [];

  public restauranteSelected: Restaurant = {
    name: '',
    stars: 0,
    address: '',
    status: 'Abierto',
    color: true
  };

  public toggle = true;  


  public cambiarEstado(rw: number){
    if (this.restaurants[rw].status == 'Abierto') {
      this.restaurants[rw].status = 'Cerrado';
      this.restaurants[rw].color = false;
      
    }else{
      this.restaurants[rw].status = 'Abierto';
      this.restaurants[rw].color = true;
      
    }    

    
  }

  public eliminarRestaurante(rw: number){
    this.restaurants.splice(rw, 1);    
    alert("El restaurante ha sido eliminado exitosamente");
  }


  constructor(private _restaurantService: RestaurantService) { 
    this.restaurants = this._restaurantService.restaurants;
  }

  ngOnInit(): void {
  }

  

}
