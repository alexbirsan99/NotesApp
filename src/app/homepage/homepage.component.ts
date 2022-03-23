import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { INote } from '../objects/note';
import { NoteService } from '../services/note.service';
import {NoteComponent} from '../note/note.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) {

  }

  ngOnInit(): void {

  }

  getCurrentRoute()  {
    console.log(this.router.url);
    return this.router.url;
  }
}
