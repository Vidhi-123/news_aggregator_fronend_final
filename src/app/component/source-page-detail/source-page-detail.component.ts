import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SourceService } from 'src/app/service/source.service';
import { design_news } from '../design/design.component';
import { LikedPostsService } from 'src/app/service/liked-posts.service';
import { user } from '../login/user';
import { liked_posts } from 'src/app/liked_posts';
@Component({
  selector: 'app-source-page-detail',
  templateUrl: './source-page-detail.component.html',
  styleUrls: ['./source-page-detail.component.css']
})
export class SourcePageDetailComponent implements OnInit {
 

  news:design_news[]=[];
  item:string;
  constructor(private act_router:ActivatedRoute,private ser:LikedPostsService,private sourceService:SourceService) { }


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
    this.news=[];
    this.item = this.act_router.snapshot.params["name"];
    console.log(this.item);
    if(this.item=="abc-news")
    {
    this.sourceService.getTopnewsByAbcnews().subscribe((data:any) =>{ 
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
  else if(this.item=="bbc-news")
  {
    this.sourceService.getTopnewsByBbcnews().subscribe((data:any) =>{ 
      console.log(data);

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
  else if(this.item=="buzzfeed")
  {
    this.sourceService.getTopnewsByBuzzfeddnews().subscribe((data:any) =>{ 
      console.log(data);

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
  else if(this.item=="cnn")
  {
    this.sourceService.getTopnewsByCnnnews().subscribe((data:any) =>{ 
      console.log(data);

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
  else if(this.item=="espn_cric_info")
  {
    this.sourceService.getTopnewsByEspn_cric_sport().subscribe((data:any) =>{ 
      console.log(data);

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
  else if(this.item=="fox_news")
  {  
    this.sourceService.getTopnewsByFoxnews().subscribe((data:any) =>{ 
      console.log(data);

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
  else if(this.item=="mtv_news")
  {
    this.sourceService.getTopnewsBymtvnews().subscribe((data:any) =>{ 
      console.log(data);

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

    else if(this.item=="nbc_news")
    {
    this.sourceService.getTopnewsByNbcnews().subscribe((data:any) =>{ 
      console.log(data);

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
  else if(this.item=="news24")
  {
    this.sourceService.getTopnewsByNews24().subscribe((data:any) =>{ 
      console.log(data);

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
