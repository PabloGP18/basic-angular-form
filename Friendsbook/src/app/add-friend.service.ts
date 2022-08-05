import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private _url: string = " ";

  constructor( private http: HttpClient) {}

  public addFriend(data: Friend)
  {
    return this.http.post(this._url,data)
  }

}