import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidence',
  templateUrl: './confidence.component.html',
  styleUrls: ['./confidence.component.css']
})
export class ConfidenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<HTMLInputElement>document.getElementById('finalPO123')).value = (<HTMLInputElement>document.getElementById('intPO123')).value;
    (<HTMLInputElement>document.getElementById('finalSection')).value = (<HTMLInputElement>document.getElementById('intSection')).value;
    (<HTMLInputElement>document.getElementById('finalProductFamily')).value = (<HTMLInputElement>document.getElementById('intProductFamily')).value;
    (<HTMLInputElement>document.getElementById('finalProductFamilySubType')).value = (<HTMLInputElement>document.getElementById('intProductFamilySubType')).value ;
    (<HTMLInputElement>document.getElementById('finalProductDescription')).value = (<HTMLInputElement>document.getElementById('intProductDescription')).value;
    (<HTMLInputElement>document.getElementById('finalListPrice')).value = (<HTMLInputElement>document.getElementById('intListPrice')).value;
    (<HTMLInputElement>document.getElementById('finalPartNumber')).value = (<HTMLInputElement>document.getElementById('intPartNumber')).value;
    (<HTMLInputElement>document.getElementById('finalDiscount')).value = (<HTMLInputElement>document.getElementById('intfinalDiscount')).value;
    // (<HTMLInputElement>document.getElementById('finalUsageIndicator')).value = (<HTMLInputElement>document.getElementById('intfinalUsageIndicator')).value;;
    // (<HTMLInputElement>document.getElementById('finalUsageStartDate')).value = con10;
    // (<HTMLInputElement>document.getElementById('finalUnitofMeasure')).value = con11;
    // (<HTMLInputElement>document.getElementById('finalUnitQuanity')).value = con12;
    // (<HTMLInputElement>document.getElementById('finalNetUnitPrice')).value = con13;
    // (<HTMLInputElement>document.getElementById('finalLicenseQuanity')).value = con14;
    // (<HTMLInputElement>document.getElementById('finalUsageCountry')).value = con15;
    // (<HTMLInputElement>document.getElementById('finalExtendedAmount')).value = con16;
    
  }

  public sync()
{
  var con1 = (<HTMLInputElement>document.getElementById('conPO123')).value;
   var con2 = (<HTMLInputElement>document.getElementById('conSection')).value;
   var con3 = (<HTMLInputElement>document.getElementById('conProductFamily')).value;
   var con4 = (<HTMLInputElement>document.getElementById('conProductFamilySubType')).value;
  var con5 = (<HTMLInputElement>document.getElementById('conProductDescription')).value;
   var con6 = (<HTMLInputElement>document.getElementById('conListPrice')).value;
  var con7 = (<HTMLInputElement>document.getElementById('conPartNumber')).value;
  var con8 = (<HTMLInputElement>document.getElementById('conDiscount')).value;
  var con9 = (<HTMLInputElement>document.getElementById('conUsageIndicator')).value;
  var con10 = (<HTMLInputElement>document.getElementById('conUsageStartDate')).value;
  var con11 = (<HTMLInputElement>document.getElementById('conUnitofMeasure')).value;
  var con12 = (<HTMLInputElement>document.getElementById('conUnitQuanity')).value;
  var con13 = (<HTMLInputElement>document.getElementById('conNetUnitPrice')).value;
  var con14 = (<HTMLInputElement>document.getElementById('conLicenseQuanity')).value;
  var con15 = (<HTMLInputElement>document.getElementById('conUsageCountry')).value;
  var con16 = (<HTMLInputElement>document.getElementById('conExtendedAmount')).value;

  (<HTMLInputElement>document.getElementById('finalPO123')).value = con1;
  (<HTMLInputElement>document.getElementById('finalSection')).value = con2;
  (<HTMLInputElement>document.getElementById('finalProductFamily')).value = con3;
  (<HTMLInputElement>document.getElementById('finalProductFamilySubType')).value = con4;
  (<HTMLInputElement>document.getElementById('finalProductDescription')).value = con5;
  (<HTMLInputElement>document.getElementById('finalListPrice')).value = con6;
  (<HTMLInputElement>document.getElementById('finalPartNumber')).value = con7;
  (<HTMLInputElement>document.getElementById('finalDiscount')).value = con8;
  (<HTMLInputElement>document.getElementById('finalUsageIndicator')).value = con9;
  (<HTMLInputElement>document.getElementById('finalUsageStartDate')).value = con10;
  (<HTMLInputElement>document.getElementById('finalUnitofMeasure')).value = con11;
  (<HTMLInputElement>document.getElementById('finalUnitQuanity')).value = con12;
  (<HTMLInputElement>document.getElementById('finalNetUnitPrice')).value = con13;
  (<HTMLInputElement>document.getElementById('finalLicenseQuanity')).value = con14;
  (<HTMLInputElement>document.getElementById('finalUsageCountry')).value = con15;
  (<HTMLInputElement>document.getElementById('finalExtendedAmount')).value = con16;
  

}

}
