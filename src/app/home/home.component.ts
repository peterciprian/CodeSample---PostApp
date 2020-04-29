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

  // public $posts: Observable<Post[]>;
  public newPost: Post;
  // public $omments: Observable<Comment[]>;

  constructor(public crud: CrudService) { }

  ngOnInit() { }

}
