import { Component, Input, OnInit } from '@angular/core';
import { IColor } from '../objects/color';
import { ColorService } from '../services/color.service';
import { ITag } from '../objects/tag';
import {IColorTag} from '../objects/colorTag';
import { TagService } from '../services/tags.service';
import { Observable } from 'rxjs';
import { ArrayUtils } from '../utils/arrayutils';
import { ColorUtils } from '../utils/colorUtils';
import { TagUtils } from '../utils/tagUtils';

@Component({
  selector: 'app-tag-modal',
  templateUrl: './tag-modal.component.html',
  styleUrls: ['./tag-modal.component.css']
})
export class TagModalComponent implements OnInit {

  @Input()
  modalTag:any;

  @Input()
  public currentTag:ITag = {
    id: '',
    name:'',
    colorID:''
  };

  currentTagCopy:ITag = {} as any;

  @Input()
  colors:IColor[] = [];

  @Input()
  colorTags:IColorTag[] = [];

  buttonText:string = {} as any;

  primaryButtonAction:any;

  arrayUtils:ArrayUtils;

  selectedColor:IColor = {} as IColor;

  constructor(private colorService:ColorService, private tagService: TagService) {
    this.arrayUtils = ArrayUtils.getInstance();
    this.colors = ColorUtils.getInstance(this.colorService).getColors();
  }

  ngOnInit(): void {
    if(!this.currentTag.id) {
      this.buttonText = "Add";
      this.currentTag.name = "New Tag";
      this.primaryButtonAction = this.insertTag;

    } else {
      this.buttonText = "Change";
      this.primaryButtonAction = this.updateTag;
      this.selectedColor = ColorUtils.getInstance(this.colorService).getColor(this.currentTag.colorID);
    }
  }

  getBackgroundColor(id:string) {
    const colorUnselected = "#fff";
    const colorSelected = "#bbdefb";
    if(this.selectedColor && id === this.selectedColor.id) {
      return {'background-color': colorSelected}
    } else {
      return {'background-color': colorUnselected}
    }
  }

  getColorIndex():number {
    const colorID = this.colorTags.find(element => element.tagID == this.currentTag.id)?.colorID;
    return this.colors.findIndex(element => element.id == colorID);
  }

  insertTag():void {
    this.currentTag.name = $("#title").val() as string;
    this.currentTag.colorID = this.selectedColor.id.replace(/-/g, '');
    this.tagService.insertTag(this.currentTag).subscribe(response => {
      this.currentTag.id = response.id;
      TagUtils.getInstance(this.tagService).insertTag(this.currentTag);
    });
    this.modalTag.close();
  }

  updateTag():void {
    this.currentTag.name = $("#title").val() as string;
    this.currentTag.colorID = this.selectedColor.id.replace(/-/g, '');
    console.log(this.currentTag);
    this.tagService.updateTag(this.currentTag).subscribe();
    this.modalTag.close();
  }
}
