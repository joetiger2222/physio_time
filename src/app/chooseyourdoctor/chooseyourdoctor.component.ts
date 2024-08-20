import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-chooseyourdoctor',
  templateUrl: './chooseyourdoctor.component.html',
  styleUrls: ['./chooseyourdoctor.component.css']
})
export class ChooseyourdoctorComponent {

  ngOnInit(){
    window.addEventListener('message', (message) => {
      console.log('message recieved from iframe',message)
        const data = JSON.parse(message.data);
        const { userId } = data;
        if (userId){
          localStorage.setItem('userId', userId);
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
