import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NewsService {
//apikey = 'd2eeead13ec94db88fa0eea8cf3b62bc';
apikey = '8ec24b1c0bf64ac7817a3da65e708916'
  constructor(private http: HttpClient  ) { }
  getGeneralArticles(){
    // return this.http.get('http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey='+this.apikey);
     return this.http.get('/v2/top-headlines?country=in&apiKey='+this.apikey);
  }
  getArticleByBusiness()
  {
    return this.http.get('/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=business');
  }
  getArticleByentertainment()
  {
    return this.http.get('/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=entertainment');
  }
  getArticleByHealth()
  {
    return this.http.get('/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=health');
  }
  // getArticleByScience()
  // {
  //   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=science');
  // }
  getArticleBySports()
  {
    return this.http.get('/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=sports');
  }
  getArticleByTechnology()
  {
    return this.http.get('/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=technology');
  }
  // getArticlesById(source: string){
  //   return this.http.get('http://newsapi.org/v2/top-headlines?sources'+ source+'&apiKey='+this.apikey);
  // }
  getArticleByYoga()
  {
    return this.http.get('/v2/everything?q=yoga&apiKey='+this.apikey);
  }
  getArticleByTrump()
  {
    return this.http.get('/v2/everything?q=trump&apiKey='+this.apikey);
  }
  getArticleByPsychology()
  {
    return this.http.get('/v2/everything?q=Psychology&apiKey='+this.apikey);
  }
  getArticleByCovid()
  {
    return this.http.get('/v2/everything?q=covid19&apiKey='+this.apikey);
  }
  getArticleByLifeStyle()
  {
    return this.http.get('/v2/everything?q=lifestyle&apiKey='+this.apikey);
  }
  getArticleByStartups()
  {
    return this.http.get('/v2/everything?q=startups&apiKey='+this.apikey);
  }
  getArticleByScience()
  {
    return this.http.get('/v2/everything?q=science&apiKey='+this.apikey);
  }
  getArticleByPolitics()
  {
    return this.http.get('/v2/everything?q=politics&apiKey='+this.apikey);
  }
  getArticleByFinance()
  {
    return this.http.get('/v2/everything?q=finance&apiKey='+this.apikey);
  }
  getArticleByFood()
  {
    return this.http.get('/v2/everything?q=food&apiKey='+this.apikey);
  }
  getArticleByTravel()
  {
    return this.http.get('/v2/everything?q=travel&apiKey='+this.apikey);
  }
  getArticleByFashion()
  {
    return this.http.get('/v2/everything?q=fashion&apiKey='+this.apikey);
  }
  getArticleByInvesting()
  {
    return this.http.get('/v2/everything?q=investing&apiKey='+this.apikey);
  }
   getArticleByStock()
  {
    return this.http.get('/v2/everything?q=stockmarket&apiKey='+this.apikey);
  }
   getArticleByMovies()
  {
    return this.http.get('/v2/everything?q=movies&apiKey='+this.apikey);
  }
}

