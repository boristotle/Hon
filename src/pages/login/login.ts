import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    // Your app login API web service call triggers 
    this.navCtrl.push(TabsPage);
  }
  cancel() {
    this.navCtrl.push(WelcomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
