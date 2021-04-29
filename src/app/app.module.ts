import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoEditComponent } from './components/photo-edit/photo-edit.component';
import { PhotoAddComponent } from './components/photo-add/photo-add.component';
import { PreloadService } from './services/preload/preload.service';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoEditComponent,
    PhotoAddComponent,
    PhotoDetailsComponent,
    PhotoDetailsComponent,
    DialogComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatGridListModule ,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [{provide: APP_INITIALIZER, useFactory: preloadServiceFactory, deps:[PreloadService], multi:true}],
  bootstrap: [AppComponent]
})



export class AppModule { }


export function preloadServiceFactory(service:PreloadService){
  return ()=>service.loadItems();
}