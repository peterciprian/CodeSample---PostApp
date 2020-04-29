import { Component } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal/';
import { NewPostComponent } from '../new-post/new-post.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bsModalRef: BsModalRef;

  constructor(
    public crud: CrudService,
    private modalService: BsModalService) { }

  save(newPost) {
    this.crud.createPost(newPost).subscribe(
      res => {
        this.bsModalRef.hide();
        this.crud.fetchPosts();
      },
      err => {
        console.error(err);
        this.bsModalRef.hide();
      });
  }

  addPost() {
    this.bsModalRef = this.modalService.show(NewPostComponent);
    this.bsModalRef.content.newPost.subscribe(newPost => this.save(newPost));
  }
}
