import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    PostComponent,
    ModalModule,
    AngularFontAwesomeModule
  ]
})
export class SharedModule { }
