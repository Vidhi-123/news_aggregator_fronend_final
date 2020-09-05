import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { user } from '../login/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  constructor(private _ser:LoginService) {}
  auth2: any;


  fbLibrary() {

    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '4873424166008425',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      window['FB'].AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
}


login() {
  window['FB'].login((response) => {
    console.log('login response',response);
    if (response.authResponse) {

      window['FB'].api('/me', {
        fields: 'last_name, first_name, email'
      }, (userInfo) => {

        console.log("user information");
        console.log(userInfo);
        this._ser.getUserByEmailId(userInfo.email).subscribe(
          (data:any[])=>{
            if(data.length==0)
            {

              this._ser.add_user(new user(userInfo.first_name,userInfo.email)).subscribe(
                (data:any)=>{
                  console.log(data);
                  localStorage.setItem('email_id',userInfo.email);
                  localStorage.setItem('user_id',data.insertId);
                  window.location.href=localStorage.getItem("url");
                }
              )
            }
            else
            {
              console.log(data);
              localStorage.setItem('email_id',data[0].email_id);
              localStorage.setItem('user_id',data[0].user_id);
              window.location.href=localStorage.getItem("url");
            }
          }
        )
 

      
      });

    } else {
      console.log('User login failed');
    }
}, {scope: 'email'});
}

  prepareLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE

        this._ser.getUserByEmailId( profile.getEmail()).subscribe(
          (data:any[])=>{
            if(data.length==0)
            {

              this._ser.add_user(new user(profile.getName(),profile.getEmail())).subscribe(
                (data:any)=>{
                  console.log(data);
                  localStorage.setItem('email_id',profile.getEmail());
                  localStorage.setItem('user_id',data.insertId);
                  window.location.href=localStorage.getItem("url");
                }
              )
            }
            else
            {
              console.log(data);
              localStorage.setItem('email_id',data[0].email_id);
              localStorage.setItem('user_id',data[0].user_id);
              window.location.href=localStorage.getItem("url");
            }
          }
        )


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }


  googleSDK() {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '293470492550-4cbttbibihvvbbp6shcbo53bgac74pks.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }

  ngOnInit() {
    this.googleSDK();
    this.fbLibrary();
  }

}
