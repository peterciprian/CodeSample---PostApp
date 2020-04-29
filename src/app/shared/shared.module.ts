import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    PostComponent,
    ModalModule
  ]
})
export class SharedModule { }
