import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  [x: string]: any;
 

  constructor(private http: HttpClient) { }

  getMakes(){

return this.http.get('/api/makes');

  }

  getFeatures(){
    return this.http.get('/api/features');
}

create(vehicle){
  return this.http.post('/api/vehicles', vehicle);
}

}

