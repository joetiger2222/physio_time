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

  constructor(private metaPixelService:MetaPixelService){}

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
    this.metaPixelService.trackCustomEvent('buy', {
      content_name: 'Product Name',
      content_ids: ['PRODUCT_ID'],
      content_type: 'product',
      value: 100.00,
      currency: 'USD'
    });
  }

}
