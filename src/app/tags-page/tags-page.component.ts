import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IColor } from '../objects/color';
import { IColorTag } from '../objects/colorTag';
import { ColorService } from '../services/color.service';
import { ITag } from '../objects/tag';
import { TagService } from '../services/tags.service';
import { ArrayUtils } from '../utils/arrayutils';
import { TagUtils } from '../utils/tagUtils';
import { ColorUtils } from '../utils/colorUtils';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.css']
})
export class TagsPageComponent implements OnInit {

  colorUtils: ColorUtils = {} as ColorUtils;

  public tagUtils: TagUtils;

  selectedTag: ITag = {} as ITag;

  constructor(public tagService: TagService, private colorService: ColorService, private modalService: NgbModal) {
    this.tagUtils = TagUtils.getInstance(this.tagService);
    console.log(this.tagUtils);
  }

  ngOnInit(): void {
    this.colorUtils = ColorUtils.getInstance(this.colorService);
  }


  createNewTag(modal: any) {
    this.selectedTag = {
      id: '',
      name: '',
      colorID: '',
    };
    this.modalService.open(modal, { centered: true, scrollable: true, });
    var modalContent = $(".modal-content");
    modalContent.attr("style", "border-radius: 15px !important;");
  }

  getBackgroundColor(tag: ITag) {
    const color = this.colorUtils.getColor(tag.colorID);
    return {
      'background-color': color ? `#${color.hexCode}` : `#fff`
    }
  }

  editTag(tag: ITag, modal: any) {
    this.selectedTag = tag;
    this.modalService.open(modal, { centered: true, scrollable: true });
    var modalContent = $(".modal-content");
    modalContent.attr("style", "border-radius: 15px !important;");
  }

  deleteTag(tag: ITag): void {
    TagUtils.getInstance(this.tagService).deleteTag(tag);
  }
}
