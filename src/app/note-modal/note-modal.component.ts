import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { INote } from '../objects/note';
import { NoteService } from '../services/note.service';
import { ITag } from '../objects/tag';
import { TagStyles } from '../utils/tagStyles';
import { ColorService } from '../services/color.service';
import { TagService } from '../services/tags.service';
import { Notes } from '../objects/notes';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.css']
})
export class NoteModalComponent implements OnInit {

  notes:Notes = {} as Notes;

  image:string = "";

  @Output()
  primaryAction:EventEmitter<{tag:ITag, note:INote}> = new EventEmitter<{tag:ITag, note:INote}>();

  @Input()
  showDialog:boolean = false;
  showDialogObservable:Observable<boolean> = new Observable<boolean>();

  @Input()
  modalNote: any;

  @Input()
  modalPrimaryActionText: any;

  @Input()
  currentNote:INote = {
    title: 'Title',
    description:''
  } as INote;

  @Input()
  currentTag:ITag = {
    name: 'No tag selected'
  } as ITag;

  constructor(public noteService: NoteService, private tagService: TagService, private colorService:ColorService) {
    this.notes = Notes.getInstance(noteService);
  }

  ngOnInit(): void {
    this.currentNote.image?this.image = this.currentNote.image:null;
  }

  onImageSelected(event:Event) {
    const target = event.target as HTMLInputElement;
    this.loadImageNote(target.files);
  }


  loadImageNote(files:any) {
    if(files && files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (file:any) => {
        this.image = file.target?.result;
      }
    }
  }

  formatDate(date:any) {
    date = new Date(date);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    return year + "." + month + "." + day;
  }

  onTagSelected(tag:ITag) {
    this.currentTag = tag;
    this.currentNote.tagID = tag.id;
  }

  onPrimaryAction() {
    this.currentNote.title = $("#title").val() as string;
    this.currentNote.description = $("#noteDescription").val() as string;
    this.currentNote.modifyDate = new Date().toISOString();
    this.currentNote.image = this.image;
    return this.primaryAction.emit({tag: this.currentTag, note: this.currentNote});
  }

  openImage() {
    var noteImage = new Image();
    noteImage.src = this.image;
    const windowImage = window.open('');
    windowImage?.document.write(noteImage.outerHTML);
  }

  toggleDialog() {
    this.showDialog = !this.showDialog;
    this.showDialogObservable = new Observable(observer => observer.next(this.showDialog));
  }

  closeDialog(event:any) {
    this.showDialog = false;
    this.showDialogObservable = new Observable(observer => observer.next(this.showDialog));
  }
}
