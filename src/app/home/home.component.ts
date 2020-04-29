import { Component, OnInit } from '@angular/core';
import { CrudService } from '../core/services/crud.service';
import { Observable } from 'rxjs';
import { Post } from '../core/models/post';
import { Comment } from '../core/models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public $posts: Observable<Post[]>;

  constructor(public crud: CrudService) {
    this.$posts = this.crud.getAllPost();
  }

  ngOnInit() { }

}
