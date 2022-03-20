import { INote } from "./note";
import { NoteService } from "../services/note.service";
import { ITag } from "./tag";

export class Notes {

  private static notesInstance: Notes;

  private noteList: INote[] = [];

  private noteService: NoteService = {} as NoteService;

  private constructor(noteService: NoteService) {
    this.noteService = noteService;
    this.noteService.getNotes().subscribe(data => this.noteList = data);
  }


  public static getInstance(noteService: NoteService): Notes {
    if (!this.notesInstance) {
      this.notesInstance = new Notes(noteService);
    }
    return this.notesInstance;
  }

  public getNotes(): INote[] {
    return this.noteList;
  }


  public getNote(id: string): INote {
    return this.noteList.filter(
      element => element.id = id
    )[0];
  }

  public insertNote(note: INote) {
    note.createDate = new Date().toISOString();
    note ? this.noteService.insertNote(note).subscribe(
      data => {
        note = data;
        this.noteList.push(note);
      }
    ) : null;
  }

  public deleteNote(id: string) {
    this.noteService.deleteNote(id).subscribe();
    this.noteList = this.noteList.filter(element => element.id != id);
  }

  public setNotes(noteList:INote[]) {
    this.noteList = noteList;
  }

}
