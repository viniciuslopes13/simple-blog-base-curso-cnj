import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Post } from '../../models/post';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardPostFormDialog } from '../dashboard-post-form-dialog/dashboard-post-form-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dahsboard-post-tab',
  imports: [MatTableModule, MatButtonModule, MatIconModule, DashboardPostFormDialog],
  templateUrl: './dahsboard-post-tab.html',
  styleUrl: './dahsboard-post-tab.css'
})
export class DahsboardPostTab {

  constructor(private dialog: MatDialog){

  }

  posts: Post[] = [];
  displayedColumns = ["id", "author", "title", "date", "edit", "delete"];

  openPostFormDialog(){
    const dialogRef = this.dialog.open(DashboardPostFormDialog);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })
  }

}
