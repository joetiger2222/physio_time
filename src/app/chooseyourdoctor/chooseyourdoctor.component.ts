import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-chooseyourdoctor',
  templateUrl: './chooseyourdoctor.component.html',
  styleUrls: ['./chooseyourdoctor.component.css']
})
export class ChooseyourdoctorComponent {



ngOnInit() {
  console.log('on init happened from iframe')
    window.addEventListener('message', (event) => {
      console.log('event from iframe',event)
      if (event.origin === 'http://localhost:4200') {  // Adjust the origin as needed
        const { key, value } = event.data;
        if (key && value) {
          localStorage.setItem(key, value);
        }
      }
    });
  }


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
}
