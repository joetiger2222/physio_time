import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MetaPixelService } from '../services/meta-pixel.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  arr = [
    '../../assets/6.png',
    '../../assets/9.jpeg',
    // '../../assets/10.jpeg',
    '../../assets/2.jpeg',
    '../../assets/14.jpeg',
    // '../../assets/11.jpeg',
    '../../assets/12.jpeg',
    '../../assets/13.jpeg',
    '../../assets/5.jpeg',
  ];
  
  currentIndex = 0;
  currentImage: string='';

  constructor(private metaPixelService:MetaPixelService,private HttpClient:HttpClient){}

   ngOnInit()  {
    // Initialize the current image
    this.currentImage = this.arr[this.currentIndex];
    
    // Change the image every 2 seconds
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.arr.length;
      this.currentImage = this.arr[this.currentIndex];
    }, 2000);
    
  }

  trackClick(){
    this.metaPixelService.trackCustomEvent('testeventparamters',{productName:'test pramas'});
  }

  sendConversion(){
    console.log('send conversion happened');
    const eventData=
       
          {
              "event_name": "custom conversion",
              "event_time": 1720604353,
              "action_source": "website",
              "user_data": {
                  "em": [
                      "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
                  ],
                  "ph": [
                      null
                  ]
              },
              "custom_data": {
                  "currency": "USD",
                  "value": "142.52",
                  "refrrer":localStorage.getItem('reffreal')
              }
          
      
  }
    this.metaPixelService.sendEvent(eventData).subscribe(response => {
      console.log('Event sent successfully', response);
    }, error => {
      console.error('Error sending event', error);
    });
  
  }

}
