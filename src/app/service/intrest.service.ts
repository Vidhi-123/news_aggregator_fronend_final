import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../component/login/user';

@Injectable({
  providedIn: 'root'
})

export class IntrestService {
private cat:string='http://localhost:3000/cat/';
private intrest:string='http://localhost:3000/intrest/';
  constructor(private _http:HttpClient) { }
  getallCateogry(){
  
  return this._http.get(this.cat);
}
addIntrest(item)
{
  
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.intrest,body,{headers:head1});
  
}
getIntrestByUserId(user_id)
{
  console.log(user_id);
    return this._http.get(this.intrest+user_id);
}
deleteIntrestByUserId(user_id)
{
  return this._http.delete(this.intrest+user_id);
}
}
