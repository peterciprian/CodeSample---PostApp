import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/core/services/crud.service';
import { Post } from 'src/app/core/models/post';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  public $comments: Observable<Comment[]>;
  constructor(public crud: CrudService) { }

  ngOnInit(): void {
    this.$comments = this.crud.getCommentsByPostId(this.post.id);
  }
}
