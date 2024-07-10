import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaPixelService {
  private apiUrl = 'https://graph.facebook.com/v13.0/477380084779494/events';
  private accessToken = 'EAAGMqbGKqNMBO9r30OsY8xcRdZBoiy6mZB0UZCEk7zSWeQWvqsryZBr7vZALA4kg1AP9IMXs3LH4jOQ9u1qanXNbKBoPmj6UYNFuGskTMZCaSIzAsKAwUdNMvmJvxAhJ849QJHlxXVkLMKfEZBqLDF8GF3G7JuRxvpIJ8iXRmjy3lhKlZCC0wnnZCidgaYAUbSpkZAkAZDZD';
  constructor(private http:HttpClient) { }

  trackCustomEvent(eventName: string, params: object = {}) {
    if ((<any>window).fbq) {
      // (<any>window).fbq('track', eventName, params);
      (<any>window).fbq('track', 'Purchase', {value: 500.00, currency: 'USD'});
    }
  }

  sendEvent(eventData: any) {
    const url = `${this.apiUrl}?access_token=${this.accessToken}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, { data: [eventData] }, { headers });
  }

 


}
