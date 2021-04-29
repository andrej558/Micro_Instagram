import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from 'src/app/models/Photo';
import { ApiService } from 'src/app/services/api/api.service';
import { PreloadService } from 'src/app/services/preload/preload.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {

  item:IPhoto = null;

  editForm: FormGroup;

  constructor(private preload:PreloadService, 
    private route: ActivatedRoute, 
    private fb:FormBuilder, private api:ApiService,
    private router:Router, private snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      snapshot=>{
        const id = snapshot.get('id');
        this.item = this.preload.getItem(+id);
        //console.log(this.item.title);
      })
    this.editForm = this.fb.group({
      id: new FormControl({value: this.item.id, disabled:true}),
            albumId: new FormControl({ value: this.item.albumId, disabled:true}),
            title: [this.item.title , Validators.required],
            url: [this.item.url, Validators.required],
            thumbnailUrl: [this.item.thumbnailUrl, Validators.required]

    });
  }

  submit(){
    this.api.updatePhoto(this.item.id, this.editForm.value).subscribe(()=>{
      this.editForm.reset();
      this.router.navigateByUrl('/photos').then(()=>{
        this.snackbar.openSnackBar('Successfully Edited', 'EDIT');

      });
    },
    error=>{
      this.snackbar.openSnackBar(error.message, 'ERROR');

    })
  }

  
}
