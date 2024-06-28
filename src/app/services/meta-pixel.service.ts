import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaPixelService {

  constructor() { }

  trackCustomEvent(eventName: string, params: object = {}) {
    if ((<any>window).fbq) {
      (<any>window).fbq('track', eventName, params);
    }
  }


}
