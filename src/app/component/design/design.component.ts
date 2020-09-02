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
  liked_posts: number[] = [];
  constructor(private _ser:IntrestService,private act_router:ActivatedRoute,private newsService:NewsService,private _likedser: LikedPostsService) { }

  ngOnInit() {
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
            this.newsService.getArticleByCovid().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==1)
          {
            this.newsService.getArticleByYoga().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==3)
          {
            this.newsService.getArticleByLifeStyle().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==10)
          {
            this.newsService.getArticleByPolitics().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });          }
          else if(data[i].cat_id==15)
          {

            this.newsService.getArticleByFood().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==13)
          {
            this.newsService.getArticleByStock().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==9)
          {
  
            this.newsService.getArticleByMovies().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          
          }
          else if(data[i].cat_id==6)
          {

            this.newsService.getArticleByFashion().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==14)
          {
 
            this.newsService.getArticleByInvesting().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==8)
          {
            this.newsService.getArticleByTravel().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==7)
          {
 
            this.newsService.getArticleByFinance().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==4)
          {

  
            this.newsService.getArticleByStartups().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==12)
          {

            this.newsService.getArticleByScience().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
           
          }
          else if(data[i].category_name==2)
          {
            this.newsService.getArticleByTrump().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
          }
          else if(data[i].cat_id==11)
          {

            this.newsService.getArticleByPsychology().subscribe((data:any) =>{ 
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
              if(i==data.length-1)
              {
                this._likedser.getLikedPostsByUserId(user_id).subscribe(
                  (data1: any[]) => {
                    console.log(data);
                    for (let i = 0; i < this.news.length; i++) {
                      for (let j = 0; j < data1.length; j++) {
                        if (this.news[i].news.url == data1[j].url) {
                          //this.liked_posts[i] = 1;
                              this.news[i].liked_posts=1;
                        
                        }
                      }
                    }
                  }
                )
              }
            }
            });
        
          }
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
