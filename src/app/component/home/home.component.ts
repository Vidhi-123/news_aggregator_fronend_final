import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Router } from '@angular/router';
import { design_news } from '../design/design.component';
import { LikedPostsService } from 'src/app/service/liked-posts.service';
import { liked_posts } from 'src/app/liked_posts';
import { global } from '../global';
import { HeaderComponent } from '../header/header.component';
// import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [global]
})
export class HomeComponent implements OnInit {
  articles: design_news[] = [];
  business: Array<any> = [];
  trending_post: Array<any> = [];
  

  constructor(private newsService: NewsService,private _router: Router,private _ser:LikedPostsService) { }



  ngOnInit(): void {


    this.newsService.getGeneralArticles().subscribe(
      (data: any) => {
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 4; i++) {
          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            this.trending_post.push(data.articles[i]);
          }
          else {
            this.trending_post.push(data.articles[i]);
          }

        }


      }


    )




    this.newsService.getArticleByentertainment().subscribe(
      (data: any) => {
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {
          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            this.articles.push(new design_news(data.articles[i],0));
          }
          else {

            this.articles.push(new design_news(data.articles[i],0));
          }

        }


      }


    )








    this.newsService.getArticleBySports().subscribe(
      (data: any) => {
        // console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            // console.log(data.articles[i].description);
            this.articles.push(new design_news(data.articles[i],0));
          }
          else {

            this.articles.push(new design_news(data.articles[i],0));
          }

        }


      }
    )




    this.newsService.getArticleByScience().subscribe(
      (data: any) => {
        //    console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //  console.log(data.articles[i].description);
            this.articles.push(new design_news(data.articles[i],0));
          }
          else {

            this.articles.push(new design_news(data.articles[i],0));
          }

        }


      }
    )


    this.newsService.getArticleByTechnology().subscribe(
      (data: any) => {
        //  console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {


          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //    console.log(data.articles[i].description);
            this.articles.push(new design_news(data.articles[i],0));
          }
          else
          this.articles.push(new design_news(data.articles[i],0));
        }


      }
    )




    this.newsService.getArticleByHealth().subscribe(
      (data: any) => {
        // console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //   console.log(data.articles[i].description);
            this.articles.push(new design_news(data.articles[i],0));
          }
          else
          this.articles.push(new design_news(data.articles[i],0));
        }


      }
    )


    this.newsService.getArticleByBusiness().subscribe(
      (data: any) => {
        //console.log(data.articles);
        data.articles.sort(
          (a, b) => b.publishedAt.localeCompare(a.publishedAt)
        )
        for (let i = 0; i < 3; i++) {

          if (data.articles[i].description.length >= 100 || data.articles[i].title.length >= 40) {
            data.articles[i].title = data.articles[i].title.substr(0, 40) + '...';
            data.articles[i].description = data.articles[i].description.substr(0, 100) + '...';
            //  console.log(data.articles[i].description);
            this.articles.push(new design_news(data.articles[i],0));
          }
          else
          this.articles.push(new design_news(data.articles[i],0));
        }
        //console.log(this.articles);

      }

    )

    let user_id=Number(localStorage.getItem("user_id"));
    if(user_id!=0)
    {
      setTimeout(() => {
      
        this._ser.getLikedPostsByUserId(user_id).subscribe(
          (rep1:any[])=>{
            console.log(rep1);
            for(let i=0;i<rep1.length;i++)
            {
              for(let j=0;j<this.articles.length;j++)
              {
                if(this.articles[j].news.url==rep1[i].url)
                {
                  this.articles[j].liked_posts=1;
                }
              }
            }
          }
        );

      }, (1000));
      
    }




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
      this._ser.addLikedPosts(new liked_posts(user_id, item.news.urlToImage, item.news.url, item.news.title, item.news.description)).subscribe(
        (data: any) => {
          console.log(data);
          //this.header_comp.ngOnInit();
        }
      )
    }
    else {
      this._ser.deletePosts(user_id, item.news.title).subscribe(
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

  // searchArticle(source){
  //   this.newsService.getArticlesById(source).subscribe(data => this.articles=data['articles']);
  // }
  businessArticle() {
    // this.newsService.getArticleByBusiness().subscribe(data => this.business=data['articles']);
    // console.log(this.business);
  }
}
