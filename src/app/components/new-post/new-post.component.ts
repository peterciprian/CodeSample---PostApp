import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
