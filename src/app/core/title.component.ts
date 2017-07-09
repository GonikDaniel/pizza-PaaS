import { Component, Input } from '@angular/core';
import { UserService }      from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  public title = 'Angular Modules';
  public user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
