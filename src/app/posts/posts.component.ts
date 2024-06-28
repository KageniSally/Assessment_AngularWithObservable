import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/posts';
import { PostsService } from '../../Services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  allPosts: Post[] = []
  image: string = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D'



  constructor(private postService: PostsService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.allPosts = posts
    })
  }
}
