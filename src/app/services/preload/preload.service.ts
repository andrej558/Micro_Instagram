import { Injectable } from '@angular/core';
import { IPhoto } from 'src/app/models/Photo';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {

  items: IPhoto[] = null;
  
  constructor(private api: ApiService) { }



  getItems():IPhoto[]{
    return this.items;
  }

  getItem(id:number):IPhoto{
    return this.items.find(z=>z.id == id)

  }

  addItem(photo: IPhoto){
    console.log("ADDING");
    photo.id = this.items.length;
    this.items.push(photo);
  }

  loadItems(){
    return new Promise((resolve=>{
      this.api.getPhotos().subscribe(
        photos => {this.items = photos;
        resolve(true);
      });
    }));
  }
}
