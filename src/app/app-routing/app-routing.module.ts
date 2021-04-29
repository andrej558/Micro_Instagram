import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from '../components/photo-list/photo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoEditComponent } from '../components/photo-edit/photo-edit.component';
import { PhotoDetailsComponent } from '../components/photo-details/photo-details.component';
import { PhotoAddComponent } from '../components/photo-add/photo-add.component';




let routes: Routes = [

  {path: "", component: PhotoListComponent},
  {path: "photos", component: PhotoListComponent,
  //children:[
    //{path:"add", component: PhotoAddComponent}]
  },
  {path:"photos/add", component: PhotoAddComponent},
  {path: "edit/:id", component: PhotoEditComponent},
  {path:"details/:id", component: PhotoDetailsComponent},
  //{path: "**", component: PhotoListComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
