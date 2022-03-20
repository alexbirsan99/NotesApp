export class ArrayUtils {

    private static instance: ArrayUtils;

    private constructor() {

    }

    public static getInstance(): ArrayUtils {
        if(!ArrayUtils.instance) {
            ArrayUtils.instance = new ArrayUtils();
        }
        return ArrayUtils.instance;
    }

    removeElement (elementToRemove:any, array:Array<any>) {
        return array.filter(element => {
            return element != elementToRemove;
        });
    }

    replaceElement(oldElement:any, newElement:any, array:Array<any>) {
        array.forEach((element, index) => {
            console.log(index);
            element === oldElement ? array[index] = newElement : null
        });
    }
}