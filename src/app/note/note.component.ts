import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorService } from '../services/color.service';
import { NoteService } from '../services/note.service';
import { ITag } from '../objects/tag';
import { TagService } from '../services/tags.service';
import { TagStyles } from '../utils/tagStyles';
import {INote} from '../objects/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  currentNote:INote = {} as INote;

  @Input()
  modal = {};

  @Input()
  modelService = {};


  currentTag:any = null;

  constructor(
    public tagService:TagService,
    public noteService: NoteService,
    private modalService:NgbModal) {
  }

  ngOnInit(): void {
    this.getTag();
  }

  ngAfterContentInit():void {

  }

  getTag() {
    this.currentNote.id && this.currentNote.tagID?this.tagService.getTag(this.currentNote.tagID).subscribe(
      (data:ITag) => {
        this.currentTag = data;
      }
    ):null;
  }


  updateNote(modal:any, event:any) {
    this.noteService.updateNote(event.note).subscribe();
    event.tag?this.currentTag = event.tag : null;
    modal.close();
  }

  modifyNote(modal:any) {
    const noteModal = this.modalService.open(modal, {centered:true, scrollable:true,});
    var modalContent = $(".modal-content");
    modalContent.attr("style", "border-radius: 15px !important;");
    noteModal.closed.subscribe(() => $("#dialog").remove());
    noteModal.dismissed.subscribe(() => $("#dialog").remove());
  }
}
