import { Component, OnInit } from '@angular/core';
import {Friend} from "../friend";
import {FormGroup, Validator} from "@angular/forms";
import {AddFriendService} from "../add-friend.service"

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  languages = ['html','css','js','php','typescript'];

  friendModel = new Friend('','','','','');

  constructor (private addFriendService: AddFriendService) {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.friendModel);

    const observable = this.addFriendService.addFriend(this.friendModel);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });

  }

}
