import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { User } from '../../Models/userDetails';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  image: string = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D'

  allUsers: User[] = []
  userShowed!: User


  constructor(private userService: UserServiceService) { }




  ngOnInit(): void {


    this.userService.getUsers().subscribe(users => {
      console.log(users)
      this.allUsers = users

      this.userShowed = users[0]
    })
  }

  getUser(event: Event) {
    const id = +(event.target as HTMLSelectElement).value
    let selectedUser = this.allUsers.find(u => u.id === id)


    if (selectedUser) { this.userShowed = selectedUser }




  }

  // loadUserDeets(index :number){
  //   console.log(index)
  // }


}
