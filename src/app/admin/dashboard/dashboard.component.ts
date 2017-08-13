import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import countries from '../../shared/countries';

@Component({
  selector: 'paas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: FirebaseListObservable<any[]>;
  private randomAvatarId = this.getRandom(1, 8);

  constructor(
    private db: AngularFireDatabase
  ) {
    this.users = this.db.list('/users', {
      query: {
        limitToLast: 10
      }
    });
  }

  ngOnInit() {
  }

  getFlag(countryCode) {
    return countryCode
      ? `assets/img/flags/${countries[countryCode]}.png`
      : 'assets/img/flags/Noname.png';
  }

  getAvatar(user) {
    return user.avatar || `assets/img/avatars/${this.randomAvatarId}.jpg`;
  }

  private getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
