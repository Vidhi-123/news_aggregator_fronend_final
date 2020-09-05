import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { DummyService } from 'src/app/service/dummy.service';
import { LikedPostsService } from 'src/app/service/liked-posts.service';
import { liked_posts } from 'src/app/liked_posts';
import { user } from '../login/user';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
  
})
export class EntertainmentComponent implements OnInit {
  entertainment: Array<any> = [];
  liked_posts: number[] = [];
  user_id:number;
  constructor(private newsService: NewsService, private _likedser: LikedPostsService) { }
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

  onClickLike(item, i) {
    let user_id = Number(localStorage.getItem('user_id'));
    if(user_id!=0)
    {
    this.liked_posts[i]++;
    console.log(this.liked_posts[i]);
    if (this.liked_posts[i] % 2 != 0) {
      this._likedser.addLikedPosts(new liked_posts(user_id, item.urlToImage, item.url, item.title, item.description)).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    }
    else {
      this._likedser.deletePosts(user_id, item.title).subscribe(
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
    this.newsService.getArticleByentertainment().subscribe((data: any) => {

      for (let i = 0; i < data.articles.length; i++) {
        this.liked_posts.push(0);
        if (data.articles[i].description != null) {

          if (data.articles[i].description.length >= 150) {
            data.articles[i].description = data.articles[i].description.substr(0, 150) + '...';
            console.log(data.articles[i].description);
            this.entertainment.push(data.articles[i]);
          }
          else
            this.entertainment.push(data.articles[i]);
        }
        
        if (i == data.articles.length - 1) {
          console.log('hey');
          this.user_id = Number(localStorage.getItem('user_id'));
          console.log(this.user_id);
          if (this.user_id != null) {
            this._likedser.getLikedPostsByUserId(this.user_id).subscribe(
              (data: any[]) => {
                console.log(data);
                for (let i = 0; i < this.entertainment.length; i++) {
                  for (let j = 0; j < data.length; j++) {
                    if (this.entertainment[i].url == data[j].url) {
                      this.liked_posts[i] = 1;
                    }
                  }
                }
              }
            )
          }
        }
      }
    });

  }
}


