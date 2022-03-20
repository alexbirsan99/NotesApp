import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IColor } from '../objects/color';
import { IColorTag } from '../objects/colorTag';
import { ColorService } from '../services/color.service';
import { ITag } from '../objects/tag';
import { TagService } from '../services/tags.service';
import { TagStyles } from '../utils/tagStyles';

@Component({
  selector: 'app-select-tag-dialog',
  templateUrl: './select-tag-dialog.component.html',
  styleUrls: ['./select-tag-dialog.component.css']
})
export class SelectTagDialogComponent implements OnInit {

  @Output()
  closeEvent:EventEmitter<boolean> = new EventEmitter();

  @Output()
  onTagSelected:EventEmitter<ITag> = new EventEmitter();

  @Input()
  position:any;

  tags:ITag[] = [];

  selectedTag:ITag = {} as ITag;

  tagColors:IColorTag[] = [];

  colors:IColor[] = [];

  tagStyles:TagStyles = {} as TagStyles;

  constructor(private tagService:TagService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getTags();
    this.tagStyles = TagStyles.getInstance(this.colorService);
  }

  ngAfterViewInit(): void {
    this.getTagPosition();
    const dialog = $("#dialog");
    dialog.detach().appendTo($("body"));
    dialog[0].style.position = 'fixed';
    dialog[0].style.top = this.position.posY.toString() + 'px';
    dialog[0].style.left = this.position.posX.toString() + 'px';

  }

  getTags() {
    this.tagService.getTags().subscribe(data => this.tags = data);
  }

  selectTag(tag:ITag) {
    this.onTagSelected.emit(tag);
    this.selectedTag = tag;
  }

  getTagPosition() {
    this.position = {
      posX: $("#toggleTagDialog")[0].getBoundingClientRect().left,
      posY: $("#toggleTagDialog")[0].getBoundingClientRect().bottom + 10
    };
  }

  getTagStyle(tag:ITag) {
    return this.tagStyles.getTagStyle(tag);
  }

  close() {
    this.closeEvent.emit(false);
  }
}
