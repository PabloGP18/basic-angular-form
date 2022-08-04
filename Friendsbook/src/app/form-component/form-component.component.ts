import { Component, OnInit } from '@angular/core';
import {Friend} from "../friend";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  languages = ['html','css','js','php','typescript'];

  friendModel = new Friend('','','','','');

  constructor() { }

  ngOnInit(): void {
  }

}
