import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import { IntrestService } from 'src/app/service/intrest.service';
import { LikedPostsService } from 'src/app/service/liked-posts.service';
import { liked_posts } from 'src/app/liked_posts';

export class design_news
{
  constructor(public news:any,public liked_posts:number){

  }
}



@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  item1:string;
  news:design_news[]=[];
  cats:any[]=[];
  //liked_posts: number[] = [];
  constructor(private _ser:IntrestService,private act_router:ActivatedRoute,private newsService:NewsService,private _likedser: LikedPostsService) { }

  ngOnInit() {
    this.news=[];
    // this.item1 = this.act_router.snapshot.params["name"];
    let user_id=Number(localStorage.getItem('user_id'));
    //console.log(this.item1);

    this._ser.getIntrestByUserId(user_id).subscribe(
      (data:any[])=>
      {
        console.log(data[0]);
        this.cats=data;
        console.log(this.cats);
        for(let i=0;i<data.length;i++)
        {
          
          if(data[i].cat_id==5)
          {
            this.newsService.getArticleByCovid().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
             
            }
            });
          }
          else if(data[i].cat_id==1)
          {
            this.newsService.getArticleByYoga().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
             
            }
            });
          }
          else if(data[i].cat_id==3)
          {
            this.newsService.getArticleByLifeStyle().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==10)
          {
            this.newsService.getArticleByPolitics().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });          
          }
          else if(data[i].cat_id==15)
          {

            this.newsService.getArticleByFood().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==13)
          {
            this.newsService.getArticleByStock().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==9)
          {
  
            this.newsService.getArticleByMovies().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          
          }
          else if(data[i].cat_id==6)
          {

            this.newsService.getArticleByFashion().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==14)
          {
 
            this.newsService.getArticleByInvesting().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==8)
          {
            this.newsService.getArticleByTravel().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==7)
          {
 
            this.newsService.getArticleByFinance().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==4)
          {

  
            this.newsService.getArticleByStartups().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==12)
          {

            this.newsService.getArticleByScience().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
           
          }
          else if(data[i].category_name==2)
          {
            this.newsService.getArticleByTrump().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
          }
          else if(data[i].cat_id==11)
          {

            this.newsService.getArticleByPsychology().subscribe((data1:any) =>{ 
              //console.log(data);
           
  
        
              for(let j=0;j<data1.articles.length;j++)
              {
                if(data1.articles[j].description!=null)
                {
                
                if(data1.articles[j].description.length>=150)
                {
                  data1.articles[j].description=data1.articles[j].description.substr(0,150) + '...';
                  console.log(data1.articles[j].description);
                  this.news.push(new design_news(data1.articles[j],0));
                }
              
                else
                this.news.push(new design_news(data1.articles[j],0));
              }
              
            }
            });
        
          }
          setTimeout(()=>{

            console.log(i);
            this._likedser.getLikedPostsByUserId(user_id).subscribe(
              (res1:any[])=>{
                console.log(res1);
                for(let j=0;j<res1.length;j++)
                {
                  for(let k=0;k<this.news.length;k++)
                  {
                    if(res1[j].url==this.news[k].news.url)
                    {
                      console.log(this.news[k]);
                      this.news[k].liked_posts=1;
                    }
                  }
                }
              }
            )

          },1000)
         

        }


      }
    );
   
    
  }

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
      this._likedser.addLikedPosts(new liked_posts(user_id, item.news.urlToImage, item.news.url, item.news.title, item.news.description)).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    }
    else {
      this._likedser.deletePosts(user_id, item.news.title).subscribe(
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


 

}
