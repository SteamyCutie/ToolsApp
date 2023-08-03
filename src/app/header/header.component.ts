import { Input, Component } from '@angular/core';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  type: string | undefined;

  constructor(private service: UrlServiceService) {
    this.type = this.service.getType();
  }

  updateType(type: string): void {
    this.service.setType(type);
    this.type = type;
  }

}
