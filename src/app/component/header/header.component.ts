import { Component, OnInit } from '@angular/core';
import { IntrestService } from 'src/app/service/intrest.service';
import { Router } from '@angular/router';
import { user } from '../login/user';
import { global } from '../global';
import { LikedPostsService } from 'src/app/service/liked-posts.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [global]
})
export class HeaderComponent implements OnInit {

  flag:boolean=true;
  log_flag:boolean=false;
  constructor(private _ser:IntrestService,public dialog: MatDialog,private _ser1:LikedPostsService,private _router:Router,private _global:global) { }


  onClickDrp(){
	document.getElementById('drp').classList.add('active');
	document.getElementById('in').classList.remove('active');
  document.getElementById('de').classList.remove('active');
    document.getElementById('ho').classList.remove('active');
    document.getElementById('lik').classList.remove('active');
  }

  onClickde()
  {
    document.getElementById('drp').classList.remove('active');
	document.getElementById('in').classList.remove('active');
  document.getElementById('de').classList.add('active');
    document.getElementById('ho').classList.remove('active');
    document.getElementById('lik').classList.remove('active');
    window.location.href="http://localhost:4200/design/"
  }

  onClicklik()
  {
    document.getElementById('drp').classList.remove('active');
	document.getElementById('in').classList.remove('active');
  document.getElementById('lik').classList.add('active');
    document.getElementById('ho').classList.remove('active');
    document.getElementById('de').classList.remove('active');
    window.location.href="http://localhost:4200/likedposts/";
  }


  onClickHo(){
	document.getElementById('ho').classList.add('active');
	document.getElementById('in').classList.remove('active');
	document.getElementById('de').classList.remove('active');
    document.getElementById('drp').classList.remove('active');
    document.getElementById('lik').classList.remove('active');
  }
  onClickIn()
  {
	  document.getElementById('in').classList.add('active');
    document.getElementById('de').classList.remove('active');
	  document.getElementById('ho').classList.remove('active');
    document.getElementById('drp').classList.remove('active');
    document.getElementById('lik').classList.remove('active');
  }
  

  onSignIn()
  {
    localStorage.setItem("url",window.location.href);
    this.dialog.open(SignupComponent);

  }

  onLogOut()
  {
    localStorage.clear();
    let user_id=localStorage.getItem('user_id');
    console.log(user_id);
    this._global.header_flag=false;
    this._global.like_flag=false;
    this.log_flag=false;
    this._router.navigate(['']);
  }

  

  ngOnInit() {
  
    let user_id=localStorage.getItem('user_id');
    console.log(user_id);

    

      if(user_id!=null)
    {
      this.log_flag=true;
      this._global.header_flag=true;
      this._global.like_flag=true;
      
    }
    else
    {
      this._global.header_flag=false;
      this._global.like_flag=false;
    }

    
    
    
    
  }

}
