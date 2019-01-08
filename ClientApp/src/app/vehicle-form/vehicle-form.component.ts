import { VehicleService } from './../services/vehicle.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any = [];
  features: any = [];
  models: any = [];
  
  vehicle: any = {
    features: [
    ],
    contact: {}
  };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => {this.makes = makes; 
    

      //console.log("Makes", this.makes); 
    });
    this.vehicleService.getFeatures().subscribe(features => {this.features = features;
     console.log("Features", this.features);
    
    });
    
  }

  onMakeChange(){
    //console.log("Vehicle", this.vehicle);
   var selectedMake = this.makes.find(m => m.id == this.vehicle.make)
    this.models = selectedMake ? selectedMake.models : [];  
  }


  onFeatureToggle(featureId, $event){
    if($event.target.checked)
    this.vehicle.features.push(featureId);
    else{
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }

  }

  submit(){
    this.vehicleService.create(this.vehicle)
    .subscribe(x => console.log(x));
  }

}
