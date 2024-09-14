import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MetaPixelService } from '../services/meta-pixel.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
 
  

  constructor(private metaPixelService:MetaPixelService,private HttpClient:HttpClient){}





  imgsSwiperConfig:SwiperOptions={
    spaceBetween:20,
    loop:true,
    
    breakpoints:{
      0:{
        slidesPerView:1.5,
      },
      320:{
        slidesPerView:1.5,
      },
      650:{
        slidesPerView:2.2,
      },
      850:{
        slidesPerView:3.3,
      },
      992:{
        slidesPerView:3.5,
        // allowTouchMove:false,
      },
    }
  }





   ngOnInit()  {

    
  }


}
