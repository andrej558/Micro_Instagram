import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IPhoto } from 'src/app/models/Photo';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { PreloadService } from 'src/app/services/preload/preload.service';


@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {


  photo:IPhoto = {
    id :null,
    albumId: null,
    thumbnailUrl : '',
    title: "", 
    url: ''
  }

  constructor(private api:ApiService, private route: ActivatedRoute,
    private router:Router, private snackbar:SnackbarService,
    private preload:PreloadService) { }

  ngOnInit(): void {
  }



  submitForm(form:NgForm){
    this.api.createPhoto(this.photo).subscribe(()=>{
      form.reset();
      this.router.navigateByUrl('/photos').then(()=>{
        this.snackbar.openSnackBar('Successfully Created', 'CREATE');

      });
    },
    error => {
      this.snackbar.openSnackBar(error.message, 'ERROR');
    });

    //this.preload.addItem(this.photo);
  }
}
