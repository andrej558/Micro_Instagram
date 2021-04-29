import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from 'src/app/models/Photo';
import { ApiService } from 'src/app/services/api/api.service';
import { PreloadService } from 'src/app/services/preload/preload.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo:IPhoto = {
    albumId: -1,
    id : -1,
    thumbnailUrl : "",
    title : "",
    url : ""
  };
  
  constructor(private route: ActivatedRoute, private preload:PreloadService,
    private router:Router, private api: ApiService, private dialog:MatDialog,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      snapshot=>{
        const id = snapshot.get('id');
        this.photo = this.preload.getItem(+id);

        console.log(this.preload.items.length);
        //console.log(this.photo.thumbnailUrl);
        //console.log(this.photo.title);

      }
    )
  }

  EditPhoto(id:number){
    this.router.navigate([`edit//${id}`]);
  }  

  OpenDialog(){
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result=>{
      if(result === true){
        this.api.deletePhoto(this.photo.id).subscribe(()=>{
          this.router.navigateByUrl('/photos').then(()=>{
            this.snackbar.openSnackBar('Successfully Deleted', 'DELETE');
          });
          
        });

      }
    });
  }

}
