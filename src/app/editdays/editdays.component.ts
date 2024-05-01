import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editdays',
  templateUrl: './editdays.component.html',
  styleUrls: ['./editdays.component.css']
})
export class EditdaysComponent {
  doctorId:string='';
  allDoctorDays:DoctorDay[]=[];
  reservedAppointments: Appointment[] = [];
  choosenDayId:number=0;
  startTime:number=0;
  endTime:number=0;
  isLoading:boolean=false;
constructor(private http: HttpClient,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.doctorId=params['doctorId'];
    });
   this.getReservedAppointements(); 
  }

  getDoctorDays(appts:Appointment[]){
    this.http.get<DoctorDay[]>('https://physiotime778-001-site1.ftempurl.com/api/Doctors/DoctorDays/'+this.doctorId).subscribe({
      next:res=>{
        const filtered = res.filter(day => !appts.some(appt => appt.date === day.appointmentDay));
        this.allDoctorDays=filtered;
        this.isLoading=false;
      },
      error:err=>{
        this.isLoading=false;
      }
    })
  }


  getReservedAppointements() {
    this.isLoading=true;
    this.http
      .get<Appointment[]>(
        `https://physiotime778-001-site1.ftempurl.com/api/Appointments/ReservedAppointments/${this.doctorId}`
      )
      .subscribe({
        next: (res) => {
          this.reservedAppointments = res;
          this.getDoctorDays(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  convertTime(time:string){
    const hour:number=Number(time.slice(0,2));
    if(hour>=12){
      return hour-12+":00 PM";
    }
    return hour+":00 AM";
  }

  openDeleteDayModal(choosenDayId:number){ 
    const el = document.getElementById('DeleteDay');
    if (el !== null) {
      el.style.display = 'flex';
    }
    this.choosenDayId = choosenDayId;
  }

  CloseDeleteDayModal(){ 
    const el = document.getElementById('DeleteDay');
    if (el !== null) {
      el.style.display = 'none';
    }
    
  }

  DeleteDay(){
    this.isLoading=true
    this.http.delete(`https://physiotime778-001-site1.ftempurl.com/api/Doctors/DoctorDay/${this.choosenDayId}`).subscribe({
      next:res=>{
        this.isLoading=false
        this.getReservedAppointements();
        this.CloseDeleteDayModal();
      },
      error:err=>{
        this.isLoading=false
        alert('Error')
      }
    })
  }
  openEditModal(choosenDayId:number){ 
    const el = document.getElementById('EditDay');
    if (el !== null) {
      el.style.display = 'flex';
    }
    this.choosenDayId = choosenDayId;
  }
  CloseEditModal(){ 
    const el = document.getElementById('EditDay');
    if (el !== null) {
      el.style.display = 'none';
    }

  }
  editDay(){
    this.isLoading=true
    if(this.startTime<=0){
      const el=document.getElementById('warningMessage');
      if(el!==null){
        el.innerHTML="Please Enter A Valid Start Time";
        el.style.display="block";
      }
      this.isLoading=false
      return;
    }
    if(this.endTime<=0||this.endTime<=this.startTime){
      const el=document.getElementById('warningMessage');
      if(el!==null){
        el.innerHTML="Please Enter A Valid End Time";
        el.style.display="block";
      }
      this.isLoading=false
      return;
    }
    const body={
      start:this.startTime<10?'0'+this.startTime+':00:00': this.startTime+':00:00',
      end:this.endTime<10?'0'+this.endTime+':00:00':this.endTime+':00:00'
    }
    this.http.put(`https://physiotime778-001-site1.ftempurl.com/api/Doctors/DoctorDays/${this.choosenDayId}`,body).subscribe({
      next:res=>{
        this.isLoading=false
        this.getReservedAppointements();
        this.CloseEditModal();
      },
      error:err=>{
        this.isLoading=false
      }
    })
  }
  
}

interface DoctorDay{
  id:number;
  doctorId:string;
  appointmentDay:string;
  times:[string];
}

interface Appointment {
  date: string;
  doctorId: string;
  id: string;
  isAvailable: boolean;
  patientAge: number;
  patientEmail: string;
  patientMobileNo: string;
  patientName: string;
  time: string;
}
