import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/service/country.service'
import { design_news } from '../design/design.component';
import { LikedPostsService } from 'src/app/service/liked-posts.service';
import { liked_posts } from 'src/app/liked_posts';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
item:string;
aus: Array<any>=[];
usa: Array<any>=[];
jap: Array<any>=[];
can: Array<any>=[];
china: Array<any>=[];
rus: Array<any>=[];
newzea: Array<any>=[];
france: Array<any>=[];
malaysia: Array<any>=[];
news:design_news[]=[];
  constructor(private act_router:ActivatedRoute,private ser:LikedPostsService,private country:CountryService) { }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }



  onClickLike(item) {
    let user_id = Number(localStorage.getItem('user_id'));
    if(user_id!=0)
    {
    item.liked_posts++;
    console.log(item.liked_posts);
    if (item.liked_posts % 2 != 0) {
      this.ser.addLikedPosts(new liked_posts(user_id, item.news.urlToImage, item.news.url, item.news.title, item.news.description)).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    }
    else {
      this.ser.deletePosts(user_id, item.news.title).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    }
  }
  else{
    alert("please make sure you are log in!...");
  }
  }





  ngOnInit() {
    this.item = this.act_router.snapshot.params["name"];
    if(this.item=="aus")
    {
    this.country.getAustralia().subscribe((data:any) =>{ 
      //console.log(data);
      
      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });
  }
  else if(this.item=="usa")
  {
  this.country.getAmerica().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });
  }
  else if(this.item=="malaysia")

    this.country.getJapan().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });


else if(this.item=="can")
{
this.country.getCanada().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });

  }
  else if(this.item=="china")
  {
    this.country.getChina().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });
  }

  else if(this.item=="newzea")
  {
    this.country.getNewzealand().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });

  }
  else if(this.item=="rus")
  {
     this.country.getRussia().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });

  }
else if(this.item=="france")
{
     this.country.getFrance().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });
  }
  else if(this.item=="malaysia")
  {
   this.country.getMalaysia().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news.push(new design_news(data.articles[i],0));
        }
      
        else
        this.news.push(new design_news(data.articles[i],0));
      }

    }
    });


  }



  setTimeout(()=>{
    let user_id=Number(localStorage.getItem("user_id"));
    if(user_id!=0)
    {
    this.ser.getLikedPostsByUserId(user_id).subscribe(
      (dares:any[])=>{
        for(let i=0;i<dares.length;i++)
        {
          for(let j=0;j<this.news.length;j++)
          {
            if(dares[i].url==this.news[j].news.url)
            {
              this.news[j].liked_posts=1;
            }
          }
        }
      }
    )
    }
  },1000)

}








  }


