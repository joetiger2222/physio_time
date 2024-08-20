import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-chooseyourdoctor',
  templateUrl: './chooseyourdoctor.component.html',
  styleUrls: ['./chooseyourdoctor.component.css']
})
export class ChooseyourdoctorComponent {

  ngOnInit(){
    const value = localStorage.getItem('hello');
    console.log('value from iframe',value)

    // Send the localStorage value to the parent
    window.parent.postMessage(value,'http://localhost:4200');
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
