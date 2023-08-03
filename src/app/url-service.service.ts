import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  private type: string = 'Home';
  
  getType() : string {
    return this.type;
  }

  setType(type: string): void {
    this.type = type;
  }
}
