import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Post } from '../../models/post';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardPostFormDialogBasedOnTemplate } from '../dashboard-post-form-dialog-based-on-template/dashboard-post-form-dialog-based-on-template';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dahsboard-post-tab',
  imports: [MatTableModule, MatButtonModule, MatIconModule, DashboardPostFormDialogBasedOnTemplate],
  templateUrl: './dahsboard-post-tab.html',
  styleUrl: './dahsboard-post-tab.css'
})
export class DahsboardPostTab {

  constructor(private dialog: MatDialog){

  }

  posts: Post[] = [];
  displayedColumns = ["id", "author", "title", "date", "edit", "delete"];

  openPostFormDialog(){
    const dialogRef = this.dialog.open(DashboardPostFormDialogBasedOnTemplate);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })
  }

}
