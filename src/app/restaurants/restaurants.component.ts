import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantsService.restaurants().subscribe(restaurants =>{
    this.restaurants=restaurants;
    });
  }

}
