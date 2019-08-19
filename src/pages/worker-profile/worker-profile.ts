import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalStore} from "../../_stores/global.store";

@IonicPage()
@Component({
  selector: 'page-worker-profile',
  templateUrl: 'worker-profile.html',
})
export class WorkerProfilePage {

  public profession = '';
  public specialization = '';

  constructor(
    public globalStore: GlobalStore,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.globalStore.getProfessions()
    console.log('ionViewDidLoad WorkerProfilePage');
  }

  changeProfessional() {
    console.log('changeProfessional');
  }

  changeSpecialization() {
    console.log('changeSpecialization');
  }

  addService() {
    console.log('addService');
  }

}
