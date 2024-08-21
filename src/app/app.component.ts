import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'physio_time';
  ngOnInit() {
    console.log('refferal',document.referrer);
    localStorage.setItem('reffreal',document.referrer)
    // localStorage.setItem('hello','test localstorage')
  }
}
