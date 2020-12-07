import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

class subject{
  constructor(public value:string,public parent:string){

  }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id1:number;
desc:string;
c1:number=0;
c2:number=0;
a1:any;
cnt:number=0;
arr1:subject[]=[];


drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.arr1, event.previousIndex, event.currentIndex);
}
 
  

  indent(i:number){
    
    if(this.arr1[i].parent==null)
    {
      for(let x=i-1;x>=0;x--)
      {
        if(this.arr1[x].parent==null)
        {
          this.arr1[i].parent=this.arr1[x].value;
          break;
        }
      }
    }
    else{
      this.arr1[i].parent=this.arr1[i-1].value;
    }
    console.log(this.arr1);
    var element= document.getElementById(this.arr1[i].value);
    var left_margin=parseInt(element.style.marginLeft);
    
    element.style.marginLeft=left_margin+50+"px";
    for(let x=0;x<this.arr1.length;x++)
    {
      if(this.arr1[x].parent==this.arr1[i].value)
      {
        var ele=document.getElementById(this.arr1[x].value);
        var left=parseInt(ele.style.marginLeft);
        ele.style.marginLeft=left+50+"px";
      }
      

    }
    
  }

  delete(i:number)
  {
    for(let x=0;x<this.arr1.length;x++)
    {
      if(this.arr1[x].parent==this.arr1[i].value)
      {
        this.arr1.splice(x,1);
        x=0;
      }
    }
    setTimeout(()=>{
      this.arr1.splice(i,1);
    },0)
    
  }

  outdent(i:number)
  {
    for(let x=i;x>=0;x--)
    {   console.log(this.arr1[x].value+" i="+this.arr1[i].parent);
      if(this.arr1[i].parent==this.arr1[x].value)
      {
     
        this.arr1[i].parent=this.arr1[x].parent;
        break;
      }
    }
    console.log(this.arr1);
    var element= document.getElementById(this.arr1[i].value);
    var left_margin=parseInt(element.style.marginLeft);
    
    element.style.marginLeft=left_margin-50+"px";
    for(let x=0;x<this.arr1.length;x++)
    {
      if(this.arr1[x].parent==this.arr1[i].value)
      {
        var ele=document.getElementById(this.arr1[x].value);
        var left=parseInt(ele.style.marginLeft);
        ele.style.marginLeft=left-50+"px";
      }
      

    }
    
  }
  cl(i:number)
  {
    console.log("Row No:"+i);
  }


  
 


  AddInArray()
  {
    if(this.arr1.length==0){
      this.arr1.push(new subject(this.a1,null));
    }
    else{
      this.arr1.push(new subject(this.a1,this.arr1[this.arr1.length-1].parent));
      setTimeout(() => {
      
        var element= document.getElementById(this.arr1[this.arr1.length-2].value);
      var left_margin=parseInt(element.style.marginLeft);
      var element1= document.getElementById(this.arr1[this.arr1.length-1].value);
      console.log(element1);
      element1.style.marginLeft=left_margin+"px";
      console.log(element1);
      //element.style.marginLeft=left_margin+50+"px";
        
      }, 0);
      
    
    }
    console.log(this.arr1);
    this.a1="";
    
  }

 
  constructor() { }

  ngOnInit() {
  }

}
