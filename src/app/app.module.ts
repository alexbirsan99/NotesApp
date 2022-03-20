import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteComponent } from './note/note.component';
import { NoteModalComponent } from './note-modal/note-modal.component';

import {FormsModule} from '@angular/forms';
import { SelectTagDialogComponent } from './select-tag-dialog/select-tag-dialog.component';
import { TagsPageComponent } from './tags-page/tags-page.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { TagComponent } from './tag/tag.component';
import { TagModalComponent } from './tag-modal/tag-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NoteComponent,
    NoteModalComponent,
    SelectTagDialogComponent,
    TagsPageComponent,
    NotesPageComponent,
    TagComponent,
    TagModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
