
import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { TransformationParameter } from '../parameters/TransformationParameter.js'

class Duplicate extends ImagescriptTransformation<TransformationParameter> {
  async imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]> {
    if (image.length > 1) {
      throw new RangeError('Image should have one frame.')
    }
    return [image[0], image[0]]
  }
}

const duplicate = new Duplicate()
export { duplicate, Duplicate }
