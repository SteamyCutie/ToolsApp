import { Component, OnInit} from '@angular/core';
import { UrlServiceService } from './url-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  type: string | undefined;

  constructor(public service: UrlServiceService) {
    this.type = this.service.getType();
  }

  updateType(type: string): void {
    this.service.setType(type);
    this.type = type;
  }

  ngOnInit() {
    
  }

  openNav() {
    // this.isSidemenuActive = true;
  }

  closeNav() {
    // this.isSidemenuActive = false;
  }


}
