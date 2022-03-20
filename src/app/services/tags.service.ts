import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ITag} from '../objects/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) {

  }

  getTags():Observable<ITag[]> {
    const url = 'http://127.0.0.1:8000/api/tags/';
    return this.http.get<ITag[]>(url);
  }

  getTag(tagID:string):Observable<ITag> {
    const url = 'http://127.0.0.1:8000/api/tags/id=' + tagID + "/";
    return this.http.get<ITag>(url);
  }

  insertTag(tag:ITag):Observable<ITag>{
    const url = 'http://127.0.0.1:8000/api/createTag/';
    return this.http.post<ITag>(url, tag);
  }

  updateTag(tag:ITag):Observable<ITag> {
    const url = 'http://127.0.0.1:8000/api/updateTag/id=' + tag.id + "/";
    return this.http.post<ITag>(url, tag);
  }

  deleteTag(tagID:string):Observable<ITag> {
    const url = 'http://127.0.0.1:8000/api/deleteTag/id=' + tagID + '/';
    return this.http.delete<ITag>(url);
  }
}
