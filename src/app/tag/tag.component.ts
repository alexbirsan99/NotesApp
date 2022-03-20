import { Component, Input, OnInit } from '@angular/core';
import { ITag } from '../objects/tag';
import { ColorService } from '../services/color.service';
import { TagStyles } from '../utils/tagStyles';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input()
  tag:ITag = {} as ITag;

  tagStyles:TagStyles = {} as TagStyles;

  constructor(private colorService:ColorService) {
    this.tagStyles = TagStyles.getInstance(colorService);
  }

  ngOnInit(): void {
  }


  getTagStyle() {
    return this.tagStyles.getTagStyle(this.tag);
  }

}
