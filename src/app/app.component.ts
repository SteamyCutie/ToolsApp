import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public pageString: string | undefined;

  constructor() { }

  ngOnInit() {
    this.pageString = 'Explore';
  }

  openNav() {
    // this.isSidemenuActive = true;
  }

  closeNav() {
    // this.isSidemenuActive = false;
  }


}
