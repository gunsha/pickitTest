import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickItService} from '../../providers/pickit/pickit';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private pick: PickItService) {

  }

  public scan(){
    this.barcodeScanner.scan().then((barcodeData) => {

      let data = {id:"",data:"123123A-12312&fecha&&"+barcodeData.text};
      this.pick.pickit(data);
     }, (err) => {
         // An error occurred
     });
  }

}
