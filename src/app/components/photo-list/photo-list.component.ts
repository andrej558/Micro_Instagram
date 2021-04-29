import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/Photo';
import { ApiService } from 'src/app/services/api/api.service';
import { PreloadService } from 'src/app/services/preload/preload.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  private _url: string = "https://jsonplaceholder.cypress.io/photos";

  public photos: IPhoto[] = [];

  constructor(private api: ApiService, private preload:PreloadService,
   private http:HttpClient) { }

  ngOnInit(): void {
    //this.api.getPhotos().subscribe(
      //  val => this.photos = val);
      this.photos = this.preload.items;
      console.log(this.photos.length);
      
      //let headers = new HttpHeaders();
      //headers.set('Access-Control-Allow-Origin', '*');
      //headers.set('Access-Control-Allow-Headers', '*');
      //headers.set('Access-Control-Allow-Methods', '*');
      //this.http.get<IPhoto[]>(this._url).subscribe(
        //val=>{this.photos = val}
      //);
    
}

}
