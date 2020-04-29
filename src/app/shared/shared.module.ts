import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    MatSnackBarModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    PostComponent,
    ModalModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
