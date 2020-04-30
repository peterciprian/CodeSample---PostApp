import { Component, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Post, PostClass } from 'src/app/core/models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  @Output() newPost = new EventEmitter<Post>();
  public post = new PostClass();
  public isLoading = false;
  constructor(public bsModalRef: BsModalRef) { }

  save() {
    this.isLoading = true;
    this.newPost.emit(this.post);
  }
}
