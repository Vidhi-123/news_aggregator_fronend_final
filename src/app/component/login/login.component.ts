import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { user } from './user';
import { global } from '../global';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [global]
})
export class LoginComponent implements OnInit {
  
  
  childWindow:any;
  email_id:string;
  password:string;
  constructor(private _ser:LoginService,private _router:Router,private _global:global) { }
  onLogin()
  {
    console.log(this.email_id);
    console.log(this.password);
    this._ser.getUserByEmailId(new user(this.email_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0){

          alert("login successfully");
          this._global.header_flag=true;
          console.log(this._global.header_flag);
          localStorage.setItem('email_id',data[0].email_id);
          localStorage.setItem('user_id',data[0].user_id);
          localStorage.setItem('header_flag',"true");
          //this.childWindow = window.open("http://localhost:4200/");
          window.location.href="http://localhost:4200/";
          //this._router.navigate(['']);

          // //  this._route.navigate(['/viewprofile']);
          //  localStorage.setItem('user_id',this.user_id);
          //  this._route.navigate(['/table'])
          }
          else
          {
            alert("unsuccesful")
          }
      }
    );

  } 
  ngOnInit() {
  }

}
