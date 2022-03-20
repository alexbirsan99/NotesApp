import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { INote } from '../objects/note';
import { NoteService } from '../services/note.service';
import {NoteComponent} from '../note/note.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {

  }

 /* numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

  notes:INote[] = [];

  modalPrimaryActionText:string = '';

  primaryActionFunction:any;

  index:any = null;

  showDialogTag:boolean = false;

  positionDialog:any;

  currentNote:INote = {
    id: '',
    title: 'Title',
    description: '',
    image: '',
    createDate: Date().toString(),
    modifyDate: Date().toString()
  };

  constructor(private noteService:NoteService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.getAllNotes();
  }

  createNewNote(modal:any) {
    this.currentNote = {
      id: '',
      title: 'Title',
      description: '',
      image: '',
      createDate: new Date().toISOString(),
      modifyDate: new Date().toISOString()
    };
    //this.modalService.open(modal, {centered:true, scrollable: true});
    this.modalService.open(modal, {centered:true, scrollable:true,});
    var modalContent = $(".modal-content");
    modalContent.attr("style", "border-radius: 15px !important;");
    this.modalPrimaryActionText = "Add";
    this.primaryActionFunction = this.insertNote;
  }

  insertNote(modal:any, currentNote:INote, noteService: NoteService) {
    currentNote.createDate = new Date().toString();
    currentNote.modifyDate = new Date().toString();
    noteService.insertNote(currentNote).subscribe();
    modal.close();
  }

  updateNote(modal:any, currentNote:INote, noteService: NoteService) {
    currentNote.modifyDate = new Date().toString();
    noteService.updateNote(currentNote).subscribe();
    modal.close();
  }

  onImageSelected(event:Event) {
    const target = event.target as HTMLInputElement;
    this.loadImageNote(target.files);
  }

  loadImageNote(files:any) {
    if(files && files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      console.log(this.currentNote.image);
      reader.onload = (file:any) => {
        $("#noteImage").attr('src', file.target?.result);
        this.currentNote.image = file.target?.result;
      }
    }
  }

  modifyNote(modal:any, note:INote, i:any) {
    this.index = i;
    this.currentNote = {
      id: note.id.toString(),
      title: note.title.toString(),
      description: note.description.toString(),
      image: note.image,
      modifyDate: new Date().toISOString(),
      createDate: note.createDate
    };
    this.modalService.open(modal, {centered:true, scrollable:true,});
    var modalContent = $(".modal-content");
    modalContent.attr("style", "border-radius: 15px !important;");
    this.modalPrimaryActionText = "Update";
    this.primaryActionFunction = this.updateNote;
  }

  changeTitle(event:Event) {
    const target = event.target as HTMLInputElement;
    this.currentNote.title = target.value;
  }

  changeDescription(event:Event) {
    const target = event.target as HTMLInputElement;
    this.currentNote.description = target.value;
  }

  getAllNotes() {
    this.noteService.getNotes().subscribe(
      data => {
        this.notes = data;
      }
    );
  }


  openTagDialog(position:any) {
    this.showDialogTag = !this.showDialogTag;
    this.positionDialog = position;
  }

  hideDialogTag() {
    this.showDialogTag = false;
  }*/
}
