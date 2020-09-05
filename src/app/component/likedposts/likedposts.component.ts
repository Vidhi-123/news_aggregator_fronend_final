import { Component, OnInit } from '@angular/core';
import { LikedPostsService } from 'src/app/service/liked-posts.service';

@Component({
  selector: 'app-likedposts',
  templateUrl: './likedposts.component.html',
  styleUrls: ['./likedposts.component.css']
})
export class LikedpostsComponent implements OnInit {

  constructor(private _likedser:LikedPostsService) { }
news:any[];
  ngOnInit() {
    let user_id=Number(localStorage.getItem('user_id'));
    this._likedser.getLikedPostsByUserId(user_id).subscribe(
      (data:any[])=>{
        this.news=data;
        console.log(this.news);
      }
    )
  }


  onDlike(item:any)
  {
    let user_id=Number(localStorage.getItem('user_id'));
    this._likedser.deletePosts(user_id, item.title).subscribe(
      (data: any) => {
        this.news.splice(this.news.indexOf(item),1);
        //this.news=data;
        console.log(data);
      }
    )
  }



}
