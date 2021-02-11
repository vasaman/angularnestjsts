import { Injectable } from '@angular/core';
import { Flight } from "./flight.model";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {
      origin: "miami",destination: "chicago",flightNumber: 345,
      depart: new Date('2020-02-25T23:18:21.932Z'),
      arrive: new Date('2020-02-25T23:23:21.932Z'), nonStop: true

    },
    {
      origin: "newdelhi", destination: "jodhpur", flightNumber: 121,
      depart: new Date('2020-02-25T23:18:00.932Z'),
      arrive: new Date('2020-02-25T23:23:21.932Z'), nonStop: true

    }
  ]

  constructor() { }

  getFlights() {
    return this.flights;
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {

  }

}

