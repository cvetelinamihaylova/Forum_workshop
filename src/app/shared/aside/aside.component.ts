import { PostService } from '../../post.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces/post';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  postList: IPost[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadPostList(6).subscribe(postList => {
      this.postList = postList;
    });
  }

}
