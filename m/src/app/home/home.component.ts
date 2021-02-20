import { Component, OnInit } from '@angular/core';
import { FlightsService } from "../flights.service";
import { Flight } from "../flight.model"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flights: Flight[]

  constructor( private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }

}
