import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../service/user.service';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
users:User[];
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.us.getUsers().subscribe((data:User[])=>{this.users=data});
  }
  deleteUser(id){
    this.us.deleteUser(id).subscribe(res=>{this.users.splice(id,1)});
  }

}
