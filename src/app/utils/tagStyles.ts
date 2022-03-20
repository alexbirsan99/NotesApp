import { IColor } from "../objects/color";
import { IColorTag } from "../objects/colorTag";
import { ColorService } from "../services/color.service";
import { ITag } from "../objects/tag";
import { ColorUtils } from "./colorUtils";

export class TagStyles {

  selectedTag: ITag = {} as ITag;

  colorUtils:ColorUtils;

  static instance: TagStyles;

  private constructor(private colorService: ColorService) {
    this.colorUtils = ColorUtils.getInstance(colorService);
  }


  public static getInstance(colorService: ColorService) {
    if (!this.instance) {
      this.instance = new TagStyles(colorService);
    }
    return this.instance;
  }

  getTagStyle(tag: ITag) {
    const color = this.colorUtils.getColor(tag.colorID);
    if (color) {
      if (tag == this.selectedTag) {
        return this.getSelectedTagStyle(`#${color.hexCode}`);
      } else {
        return this.getUnselectedTagStyle(`#${color.hexCode}`);
      }
    } else {
      if (tag == this.selectedTag) {
        return this.getSelectedTagStyle("#000");
      } else {
        return this.getUnselectedTagStyle("#000");
      }
    }
  }

  public getUnselectedTagStyle(colorHexCode: string) {
    return {
      'color': colorHexCode,
      'border-color': colorHexCode
    }
  }

  public getSelectedTagStyle(colorHexCode: string) {
    return {
      'color': "#fff",
      'background-color': colorHexCode,
      'border-color': colorHexCode
    }
  }
}
