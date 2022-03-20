import { TagService } from "../services/tags.service";
import { ITag } from "../objects/tag";
import { ArrayUtils } from "./arrayutils";


export class TagUtils {

  private static instance: TagUtils;

  private tags: ITag[] = [];

  public constructor(private tagService: TagService) {
    this.loadTags();
  }


  public static getInstance(tagService: TagService) {
    if (!this.instance) {
      this.instance = new TagUtils(tagService);
    }
    return this.instance;
  }

  private loadTags() {
    this.tagService.getTags().subscribe(data => this.tags = data);
  }

  public getTags() {
    return this.tags;
  }

  public insertTag(tag:ITag) {
    this.tags.push(tag);
  }

  public deleteTag(tag:ITag) {
    this.tagService.deleteTag(tag.id).subscribe(data => {
      this.tags = ArrayUtils.getInstance().removeElement(tag, this.tags);
    });
  }

}
