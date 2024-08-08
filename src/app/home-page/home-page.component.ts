import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MetaPixelService } from '../services/meta-pixel.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
 
  

  constructor(private metaPixelService:MetaPixelService,private HttpClient:HttpClient){}

   ngOnInit()  {

    
  }


}
