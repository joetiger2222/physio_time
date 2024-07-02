import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaPixelService {

  constructor() { }

  trackCustomEvent(eventName: string, params: object = {}) {
    if ((<any>window).fbq) {
      // (<any>window).fbq('track', eventName, params);
      (<any>window).fbq('track', 'Purchase', {value: 500.00, currency: 'USD'});
    }
  }
 


}
