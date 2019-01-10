import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    this.navCtrl.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.navCtrl.setRoot(LoginPage);
  }

  

}
