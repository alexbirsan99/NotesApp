import { IColor } from "../objects/color";
import { ColorService } from "../services/color.service";

export class ColorUtils {

  private colors:IColor[] = [];

  private static instance:ColorUtils;

  private constructor(colorService:ColorService) {
    colorService.getColors().subscribe(data => this.colors = data);
  }


  public static getInstance(colorService:ColorService):ColorUtils {
    if(!this.instance) {
      this.instance = new ColorUtils(colorService);
    }
    return this.instance;
  }


  public getColors():IColor[] {
    return this.colors;
  }

  public getColor(colorID:string):IColor {

    const color = this.colors.filter(element => element.id.replace(/-/g, '') === colorID)[0];
    return color;
  }

}
