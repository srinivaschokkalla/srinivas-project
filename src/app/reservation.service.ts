import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public demo =[
    { id: 1, isBooked: true, bookedDate: '12-Dec-2021' },
    { id: 2, isBooked: false, bookedDate: '' },
];
  //info1: "1","yes","04-06-2021"
  // info2: string[]=["2","yes","05-08-2021"]
  // info3: string[]=["3","yes","08-06-2021"]
  // getinfo1():string[]{
  //   return this.info1
  // }
  // getinfo2():string[]{
  //   return this.info2
  // }
  // getinfo3():string[]{
  //   return this.info3
  // }

  getInfo(){
    return this.demo;
  }
}


