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

  constructor(public crud: CrudService) {
    this.crud.fetchPosts();
  }

  ngOnInit() { }

}
