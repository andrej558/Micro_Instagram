import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from 'src/app/models/Photo';
import { PreloadService } from '../preload/preload.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  private _url: string = "https://jsonplaceholder.cypress.io/photos";

  

  constructor(private http: HttpClient) { }


 
 
  getPhotos(): Observable<IPhoto[]>{
    //let header = new HttpHeaders();
    //header.append('Content-Type','application/json; charset=UTF-8');
    //header.set('Access-Control-Allow-Origin','*');
    //header.set('Access-Control-Allow-Headers', '*');
    //header.set('Access-Control-Allow-Methods', 'GET');
    //header.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    return this.http.get<IPhoto[]>(this._url, /*{headers : header}*/);
}

  getPhoto(id:number):Observable<any>{
    return this.http.get(`${this._url}/${id}`);
  }

  createPhoto(body:IPhoto):Observable<any>{
    
    return this.http.post(this._url, {body});
  }

  updatePhoto(id, body):Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.put<any>(`${this._url}/${id}`, body, {headers : headers});
  }

  deletePhoto(id):Observable<any>{

    return this.http.delete(`${this._url}/${id}`)
  }

  

}
