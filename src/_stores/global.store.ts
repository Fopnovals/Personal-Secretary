import {action} from "mobx-angular";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GlobalStore {
  professions = [];
  specializations:any = [];
  services = [];

  constructor(private http: HttpClient) {}

  @action getProfessions() {
    this.http.get('professions')
      .subscribe((res: Array<any>) =>{
        this.professions = res
      })
  }

}