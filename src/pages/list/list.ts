import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PickItService} from '../../providers/pickit/pickit';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pick: PickItService) {

    this.selectedItem = navParams.get('item');

    this.items = [];
    
  }

  ionViewDidEnter() {
    this.getPicks();
  }
  getPicks(){
    return this.pick.historial('123123A-12312').then((data)=>{
      this.items = data;
    });
  }

  doRefresh(refresher) {
    this.getPicks().then(() => refresher.complete() );
  }
}
