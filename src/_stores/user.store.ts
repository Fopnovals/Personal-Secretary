import {action} from "mobx-angular";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserStore {
  firstName: string = '';
  lastName: string = '';
  role: string = 'Customer';
  image: string = '../assets/img/avatar.jpeg';

  constructor(private http: HttpClient) {}

  @action setUser(user) {
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.role = user.role === 'user' ? 'Customer' : user.role;
    this.image = user.photo_url ? 'user.photo_url' : '../assets/img/avatar.jpeg';
  }

  @action getUserMe() {
    return new Promise((resolve, reject) => {
      this.http.get('users/me')
        .subscribe(res => {
          this.setUser(res);
          resolve(res)
        }, err => {
          reject(err);
        })
    })

  }
}