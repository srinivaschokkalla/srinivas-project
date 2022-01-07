import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[ReservationService]
})
export class ReservationComponent implements OnInit {
  public reservationDetails = [];
  data:{id:number,isBooked:boolean,bookedDate:string,}[]=[];
  // getreservationDetails(){
  //   this.reservationDetails=this.Rservice.getInfo();
  // }
  constructor(private Rservice: ReservationService) { }
  ngOnInit(): void {
    this.data=this.Rservice.getInfo();
  };
  // public BookTable(val : number){
  //   //console.log(id);
  //   this.reservationDetails.filter(x => x.id === val)[0].isBooked =  true;
  // }
  show:boolean=false;

  bgColor : string = 'yellowgreen';



  changestatus(id:number){

    console.log(this.data);

    console.log(id);

    this.data.filter(x=> x.id===id)[0].isBooked=false;

    console.log(this.data);

    this.bgColor = 'red';

    this.show=true;

}
}
