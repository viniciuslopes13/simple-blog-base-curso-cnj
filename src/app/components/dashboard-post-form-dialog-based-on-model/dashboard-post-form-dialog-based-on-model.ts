import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostService } from '../../services/post-service';
import { Post } from '../../models/post';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-dashboard-post-form-dialog-based-on-model',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './dashboard-post-form-dialog-based-on-model.html',
  styleUrl: './dashboard-post-form-dialog-based-on-model.css'
})
export class DashboardPostFormDialogBasedOnModel {
  
  formTitle = 'Nova Postagem (abordagem modelo)'
  submitButtonLabel = 'Salvar'

  constructor(
    private dialogRef: DialogRef<DashboardPostFormDialogBasedOnModel>,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string}
  ){}

  postForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl(DateTime.now(), Validators.required),
    content: new FormControl('', Validators.required)
  });

  ngOnInit(){
    if(this.data){
      this.formTitle = 'Editar Postagem'
      this.submitButtonLabel = 'Editar'
    }
  }

  onSubmit(){
    const author = this.postForm.value.author!!;
    const title = this.postForm.value.title!!;
    const date = this.postForm.value.date!!;
    const content = this.postForm.value.content!!;

    const post = new Post(uuidv4(),author,title,date,content);

    console.log(post)
    this.postService.createPost(post);
    this.dialogRef.close();
  }

}
