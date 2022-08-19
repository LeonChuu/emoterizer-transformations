import { Transformation } from '../abstracts/Transformation';
import { GIF, Image } from 'imagescript';
class Spin extends Transformation {
    mergeFrames(frameList) {
        throw new Error('Method not implemented.');
    }
    async transform(args) {
        const asd = new GIF();
        const test = new Image(2, 3, 4);
        return [];
    }
}
export { Spin };
