import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../objects/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) {

  }

  getNotes():Observable<INote[]> {
    const url = 'http://127.0.0.1:8000/api/notes/';
    return this.http.get<INote[]>(url);
  }

  insertNote(note:INote):Observable<INote>{
    const url = 'http://127.0.0.1:8000/api/createNote/';
    return this.http.post<INote>(url, note);
  }

  updateNote(note:INote):Observable<INote> {
    const url = 'http://127.0.0.1:8000/api/updateNote/id=' + note.id + '/';
    return this.http.post<INote>(url, note);
  }

  deleteNote(id:string):Observable<INote> {
    const url = 'http://127.0.0.1:8000/api/deleteNote/id=' + id + '/';
    return this.http.delete<INote>(url);
  }

  filterNotes(searchText:string, tagID:string):Observable<INote[]> {
    let url = 'http://127.0.0.1:8000/api';
    searchText && tagID? url = url + `/filterNote/filterSearch=${searchText}&tagID=${tagID}/`:null;
    searchText && !tagID? url = url + `/filterNote/filterSearch=${searchText}/`:null;
    tagID && !searchText? url = url + `/filterNote/tagID=${tagID}/`:null;
    !tagID && (!searchText || searchText.length === 0) ? url = url + '/notes/':null;
    console.log(tagID + ' ' + searchText)
    return this.http.get<INote[]>(url);
  }
}
