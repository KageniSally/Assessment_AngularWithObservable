import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserDetailsComponent,PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessment';
}
