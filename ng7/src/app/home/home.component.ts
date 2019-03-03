import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  newObject = {
    avatar: 'https://media.licdn.com/dms/image/C5603AQFsKV6Km5amow/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=rAAY5Q6BmibutEKSAo3BgYTlZ0YPNehUcK69v2xDvfg',
    first_name: 'Rewth',
    id: 4,
    last_name: 'Nunes'
  }

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {
        this.users = data;
        this.users.data.push(this.newObject);
        console.log('data -> ', this.users);
      })
  }

}
