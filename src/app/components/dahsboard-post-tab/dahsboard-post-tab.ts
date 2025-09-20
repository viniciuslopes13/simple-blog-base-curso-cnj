import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Post } from '../../models/post';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardPostFormDialogBasedOnTemplate } from '../dashboard-post-form-dialog-based-on-template/dashboard-post-form-dialog-based-on-template';
import { MatDialog } from '@angular/material/dialog';
import { DashboardPostFormDialogBasedOnModel } from '../dashboard-post-form-dialog-based-on-model/dashboard-post-form-dialog-based-on-model';
import { PostService } from '../../services/post-service';
import { PostDeleteDialog } from '../post-delete-dialog/post-delete-dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dahsboard-post-tab',
  imports: [MatTableModule, MatButtonModule, MatIconModule, DashboardPostFormDialogBasedOnTemplate, DatePipe],
  templateUrl: './dahsboard-post-tab.html',
  styleUrl: './dahsboard-post-tab.css'
})
export class DahsboardPostTab {

  constructor(private dialog: MatDialog, private postService: PostService){

  }

  posts: Post[] = [];
  displayedColumns = ["id", "author", "title", "date", "edit", "delete"];

  ngOnInit(){
    this.loadPosts();
  }

  openNewPostFormDialogTemplate(){
    const dialogRef = this.dialog.open(DashboardPostFormDialogBasedOnTemplate);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })
  }

  openNewPostFormDialogModel(){
    const dialogRef = this.dialog.open(DashboardPostFormDialogBasedOnModel);
    dialogRef.afterClosed().subscribe((result)=>{
      this.loadPosts();
      console.log(result);
    });
  }

  openEditPostFormDialogModel(id: string){
    const dialogRef = this.dialog.open(DashboardPostFormDialogBasedOnModel, {
      data: {id}
    });
    dialogRef.afterClosed().subscribe((result)=>{
      this.loadPosts();
      console.log(result);
    });
  }

  deletePostDialog(id: string){
    const dialogRef = this.dialog.open(PostDeleteDialog, {
      data: {id}
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result == "true"){
        this.postService.deletePost(id).subscribe(()=>{
          this.loadPosts();
        })
      }
    });
  }

  loadPosts(){
    this.postService.findAll().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
