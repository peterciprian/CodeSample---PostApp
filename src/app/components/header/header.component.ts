import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Post } from 'src/app/core/models/post';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal/';
import { NewPostComponent } from '../new-post/new-post.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;

  public newPost: Post;
  constructor(
    public crud: CrudService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.crud.createPost(this.newPost));
  }

  addPost() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(NewPostComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
