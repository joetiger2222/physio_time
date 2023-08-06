import { Component } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reserve-appointment',
  templateUrl: './reserve-appointment.component.html',
  styleUrls: ['./reserve-appointment.component.css'],
})
export class ReserveAppointmentComponent {

  constructor(private route:ActivatedRoute){}
  patientName:string='';
  ngOnInit() {
    this.route.params.subscribe(params=>{
          console.log(params['doctorName']);
        })
  }
  date: String = '';
  times:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    eventColor: '#378006',
    selectable: true,
    validRange: {
      start: new Date().toISOString().slice(0, 10), // Restrict past dates, include only today and beyond
    },
    
    select: (info) => {
      this.date = info.startStr;
      console.log('touched')
    },
    hiddenDays:[5],
  };


  openModal(){
    const modalDiv=document.getElementById('myModal');
    if(modalDiv!=null){
      modalDiv.style.display="flex";
    }
  }

  closeModal(){
    const modalDiv=document.getElementById('myModal');
    if(modalDiv!=null){
      modalDiv.style.display="none";
    }
  }

  onSubmit(elemet:NgForm){
    console.log(elemet.value);
  }

  
}
