import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccidentDetailPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accident-detail',
  templateUrl: 'accident-detail.html'
})
export class AccidentDetailPage {
  accidentInfoRoot = 'AccidentInfoPage';
  vehicleListRoot = 'VehicleListPage';
  actorListRoot = 'ActorListPage';
  sketchRoot = 'SketchPage';
  nvehicles = 4;
  nactors = 2;
  id : number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.id = navParams.get('id');
    }

}