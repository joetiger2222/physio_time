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
}
