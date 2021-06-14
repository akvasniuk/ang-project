import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let pagination, rating;
    if (req.url.includes("https://api.themoviedb.org/3/movie/top_rated&page=")) {
      let url = req.url.split("")
      let num = url.splice(50).join("")
      pagination = req.clone({
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: req.params.set('api_key', 'dbeb8a7c94c70b10030a2bea613ec0df').set('page', num)
      })
    }
    if (req.url.includes("rating")) {
      rating = req.clone({
        headers:new HttpHeaders({
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmViOGE3Yzk0YzcwYjEwMDMwYTJiZWE2MTNlYzBkZiIsInN1YiI6IjYwYzQ1MTkwNTllOGE5MDA3OGRiYWQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dcgtl_7lHfObt0qaYNQtqd2lYXI9zGDuiZIURDF8YnY'
        }),
        params: req.params.set('session_id', '816a2446c9412128ae6b4cf21a251eab7f027531')
      })
    }
    let clone = req.clone({
      headers:new HttpHeaders({'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmViOGE3Yzk0YzcwYjEwMDMwYTJiZWE2MTNlYzBkZiIsInN1YiI6IjYwYzQ1MTkwNTllOGE5MDA3OGRiYWQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dcgtl_7lHfObt0qaYNQtqd2lYXI9zGDuiZIURDF8YnY'})
    });
    if (pagination) {
      return next.handle(pagination)
    } else if (rating) {
      return next.handle(rating)
    } else {
      return next.handle(clone)
    }
  }
}
