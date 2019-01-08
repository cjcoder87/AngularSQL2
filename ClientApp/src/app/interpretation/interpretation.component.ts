import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpretation',
  templateUrl: './interpretation.component.html',
  styleUrls: ['./interpretation.component.css']
})
export class InterpretationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

 
public sync()
{
  var intPO123 = (<HTMLInputElement>document.getElementById('intPO123')).value;
  var intSection = (<HTMLInputElement>document.getElementById('intSection')).value;
  var intProductFamily = (<HTMLInputElement>document.getElementById('intProductFamily')).value;
  var intProductFamilySubType = (<HTMLInputElement>document.getElementById('intProductFamilySubType')).value;
  var intProductDescription = (<HTMLInputElement>document.getElementById('intProductDescription')).value;
  var intListPrice = (<HTMLInputElement>document.getElementById('intListPrice')).value;
  var intDiscount = (<HTMLInputElement>document.getElementById('intDiscount')).value;
  var intUsageIndicator = (<HTMLInputElement>document.getElementById('intUsageIndicator')).value;
  var intUsageStartDate = (<HTMLInputElement>document.getElementById('intUsageStartDate')).value;
  var intUnitofMeasure = (<HTMLInputElement>document.getElementById('intUnitofMeasure')).value;
  var intUnitQuanity = (<HTMLInputElement>document.getElementById('intUnitQuanity')).value;
  var intNetUnitPrice = (<HTMLInputElement>document.getElementById('intNetUnitPrice')).value;
  var intLicenseQuantity = (<HTMLInputElement>document.getElementById('intLicenseQuantity')).value;
  var intUsageCountry = (<HTMLInputElement>document.getElementById('intUsageCountry')).value;
  var intExtendedAmount = (<HTMLInputElement>document.getElementById('intExtendedAmount')).value;

  var finalPO123 = (<HTMLInputElement>document.getElementById('finalPO123')).value;
  var finalSection = (<HTMLInputElement>document.getElementById('finalSection')).value;
  var finalProductFamily = (<HTMLInputElement>document.getElementById('finalProductFamily')).value;
  var finalProductFamilySubType = (<HTMLInputElement>document.getElementById('finalProductFamilySubType')).value;
  var finalProductDescription = (<HTMLInputElement>document.getElementById('finalProductDescription')).value;
  var finalListPrice = (<HTMLInputElement>document.getElementById('finalListPrice')).value;
  var finalDiscount = (<HTMLInputElement>document.getElementById('finalDiscount')).value;
  var finalUsageIndicator = (<HTMLInputElement>document.getElementById('finalUsageIndicator')).value;
  var finalUsageStartDate = (<HTMLInputElement>document.getElementById('finalUsageStartDate')).value;
  var finalUnitofMeasure = (<HTMLInputElement>document.getElementById('finalUnitofMeasure')).value;
  var finalUnitQuanity = (<HTMLInputElement>document.getElementById('finalUnitQuanity')).value;
  var finalNetUnitPrice = (<HTMLInputElement>document.getElementById('finalNetUnitPrice')).value;
  var finalLicenseQuantity = (<HTMLInputElement>document.getElementById('finalLicenseQuantity')).value;
  var finalUsageCountry = (<HTMLInputElement>document.getElementById('finalUsageCountry')).value;
  var finalExtendedAmount = (<HTMLInputElement>document.getElementById('finalExtendedAmount')).value;

  finalPO123 = intPO123;
  finalSection = intSection;
  finalProductFamily = intProductFamily;
 finalProductFamilySubType = intProductFamilySubType;
 finalProductDescription = intProductDescription;
 finalListPrice = intListPrice;
 finalDiscount = intDiscount;
 finalUsageIndicator = intUsageIndicator;
 finalUsageStartDate = intUsageStartDate;
 finalUnitofMeasure = intUnitofMeasure;
 finalUnitQuanity = intUnitQuanity;
 finalNetUnitPrice = intNetUnitPrice;
 finalLicenseQuantity = intLicenseQuantity;
 finalUsageCountry = intUsageCountry;
 finalExtendedAmount = intExtendedAmount;

}
}