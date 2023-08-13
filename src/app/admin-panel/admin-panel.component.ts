import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  doctorId: string = '';
  appointmentId: string = '';
  reservedAppointments: Appointment[] = [];
  reservedCopy: Appointment[] = [];
  isLoading:boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.doctorId = params['doctorId'];

      this.getReservedAppointements();
    });
  }

  getReservedAppointements() {
    this.isLoading=true;
    this.http
      .get<Appointment[]>(
        `https://physiotime-001-site1.atempurl.com/api/Appointments/ReservedAppointments/${this.doctorId}`
      )
      .subscribe({
        next: (res) => {
          this.reservedAppointments = res;
          this.reservedCopy=res;  
          this.isLoading=false
        },
        error: (err) => {
          console.log(err);
          this.isLoading=false
        },
      });
  }

  getTodayAppts() {
    const date = new Date().toISOString().slice(0, 10);
    const filtered = this.reservedAppointments.filter((x) => x.date === date);
    this.reservedCopy = filtered;
  }



  convertTime(time: any) {
    const hour: number = time.slice(0, 2) * 1;
    if (hour > 12) {
      return hour - 12 + ':00 PM';
    } else return hour + ':00 AM';
  }
  convertPhoneNumber(phoneNumber:string){
    if(phoneNumber.slice(0,2)==='+2'){
      return phoneNumber.slice(2);
    }else return phoneNumber;
  }

  openCancelModal(appointmentId: string) {
    const el = document.getElementById('cancelApptModal');
    if (el !== null) {
      el.style.display = 'flex';
    }
    this.appointmentId = appointmentId;
  }
  closeCancelModal() {
    const el = document.getElementById('cancelApptModal');
    if (el !== null) {
      el.style.display = 'none';
    }
  }

  deleteAppointment() {
    this.http
      .delete(
        `https://physiotime-001-site1.atempurl.com/api/Appointments/appointmentId?appointmentId=${this.appointmentId}`
      )
      .subscribe({
        next: (res) => {
          this.getReservedAppointements();
          this.closeCancelModal();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
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
