import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  checked:boolean=true;
  constructor() { }


  onRing()
  {
    console.log(this.checked);
    if(this.checked==true)
    {
    this.checked=false;
    }
    else{
      this.checked=true;
    }
    
  }

  onSilent()
  {
    console.log(this.checked);
    if(this.checked==false)
    {
    this.checked=true;
    }
    else{
      this.checked=false;
    }
  }
  arr:any[]=[];
  read:any;
  dance:any;
  sleep:any;
  onRead()
  {
   if(this.read==true)
   {
     this.arr.push("Reading");
   }
   else{
     for(let i=0;i<this.arr.length;i++)
     {
       if(this.arr[i]=="Reading")
       {
         this.arr.splice(i,1);
       }
     }
   }
   console.log(this.arr);
  }

  onSleep()
  {
    if(this.sleep==true)
   {
     this.arr.push("Sleeping");
   }
   else{
     for(let i=0;i<this.arr.length;i++)
     {
       if(this.arr[i]=="Sleeping")
       {
         this.arr.splice(i,1);
       }
     }
   }
   console.log(this.arr);
  }

  onDance()
  {


    if(this.dance==true)
   {
     this.arr.push("Dancing");
   }
   else{
     for(let i=0;i<this.arr.length;i++)
     {
       if(this.arr[i]=="Dancing")
       {
         this.arr.splice(i,1);
       }
     }
   }

   console.log(this.arr);
  }

  ngOnInit() {
  }

}
