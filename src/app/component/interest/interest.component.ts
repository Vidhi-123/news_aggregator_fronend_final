import { Component, OnInit } from '@angular/core';
import { IntrestService } from 'src/app/service/intrest.service';
import { intrest } from './intrest';
import { Router } from '@angular/router';
declare var require: any
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  intrests:any[];
  Selected_intrest:any[]=[];
  Count_arr:number[]=[];
  user_id:number;
  constructor(private _ser:IntrestService,private _router:Router) { }

  clickIn(item:any,i:number)
  {

    console.log(item);
    console.log(i);
    this.Count_arr[i]++;
    if(this.Selected_intrest.find(x=>x.cat_id==item.cat_id)){
      this.Selected_intrest.splice(this.Selected_intrest.indexOf(item),1);
    }
    else
    {
      this.Selected_intrest.push(item);
    }
    console.log(this.Selected_intrest);
  }

  StartButton()
  {
    if(this.user_id!=0)
    {
    this._ser.deleteIntrestByUserId(this.user_id).subscribe(
      (data:any)=>{

        for(let i=0;i<this.Selected_intrest.length;i++)
        {
          this._ser.addIntrest(new intrest(this.user_id,this.Selected_intrest[i].cat_id)).subscribe(
            (data:any)=>
            {
              console.log(data);
            }
          );
          if(i==this.Selected_intrest.length-1)
          {
            window.location.href="http://localhost:4200/design/"
          }
        }
        

          }
        );
    
        }
        else
        {
          //window.location.href="http://localhost:4200/design"
          alert("you need to login!!")
        }
    
  }


  ngOnInit() {

    this.user_id=Number(localStorage.getItem('user_id'));

    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400
    });

    
    this._ser.getallCateogry().subscribe(
      (data:any[])=>{
        console.log(data);
        this.intrests=data;
        for(let i=0;i<data.length;i++)
        {
          this.Count_arr.push(0);
        }

        if(this.user_id!=0)
        {
        this._ser.getIntrestByUserId(this.user_id).subscribe(
          (data:any[])=>
          {
            console.log(data);
            for(let i=0;i<data.length;i++)
            {
              for(let j=0;j<this.intrests.length;j++)
              {
                if(this.intrests[j].cat_id==data[i].cat_id)
                {
                  this.Count_arr[j]=1;
                  this.Selected_intrest.push(data[i]);
                }
                
              }
            }
          }
        );
        }
        


      }
    );
    
    
    
  }

}
