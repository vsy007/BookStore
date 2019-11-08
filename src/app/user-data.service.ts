import { Injectable } from '@angular/core';
import { RegisterDetails } from './register-details';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
userData : RegisterDetails [] = [];
 
fromJson(userDetails: RegisterDetails){
  this.userData.push(userDetails);
}
  
constructor() { }

  getData(){
  return this.userData;
}
isValidUser(mobile, password): boolean {
  for (let i=0; i<=Object.keys(this.userData).length;i++){
    if (mobile===this.userData[i].mobile && password===this.userData[i].password){
      return true;
    }
  }
  return false;
}
  
}
