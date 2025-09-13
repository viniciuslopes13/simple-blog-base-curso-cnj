import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard-post-form-dialog-based-on-template',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './dashboard-post-form-dialog-based-on-template.html',
  styleUrl: './dashboard-post-form-dialog-based-on-template.css'
})
export class DashboardPostFormDialogBasedOnTemplate {

  author:string = 'Vinícius';
  title:string = '';
  date:string = '';
  content:string = '';

  onSubmit(postForm: NgForm){
    console.log(`
      Author: ${this.author} \n
      Title: ${this.title} \n
      Date: ${this.date} \n
      Content: ${this.content}`)
  }
}
