import { trigger } from '@angular/animations';
import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { INote } from '../objects/note';
import { NoteService } from '../services/note.service';
import {NoteComponent} from '../note/note.component';
import { Notes } from '../objects/notes';
import { TagUtils } from '../utils/tagUtils';
import { TagService } from '../services/tags.service';
import { ITag } from '../objects/tag';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {

  public notes:Notes = {} as Notes;

  tagUtils:TagUtils = {} as TagUtils;

  tagSearch:ITag = {} as ITag;

  modalPrimaryActionText:string = '';

  primaryActionFunction:any;

  index:any = null;

  showDialogTag:boolean = false;

  searchText:string = '';

  constructor(private noteService:NoteService, private modalService: NgbModal, private tagService:TagService) {

  }

  ngOnInit(): void {
    this.notes = Notes.getInstance(this.noteService);
    this.tagUtils = TagUtils.getInstance(this.tagService);
  }

  createNewNote(modal:any) {
    const noteModal = this.modalService.open(modal, {centered:true, scrollable:true,});
    noteModal.closed.subscribe(() => $("#dialog").remove());
    noteModal.dismissed.subscribe(() => $("#dialog").remove());
    var modalContent = $(".modal-content");
    modalContent.attr("style", "border-radius: 15px !important;");
    this.modalPrimaryActionText = "Add";
    this.primaryActionFunction = this.insertNote;
  }

  insertNote(modal:any, event:any) {
    var note = event.note;
    this.notes.insertNote(note);
    modal.close();
  }

  searchNotes():void {
    this.noteService.filterNotes(this.searchText, this.tagSearch.id).subscribe(data => {
      this.notes.setNotes(data);
      console.log(data);
    });
  }

}
