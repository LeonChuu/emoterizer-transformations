import { SimpleParameter } from '../parameters/SimpleParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

class Duplicate extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: SimpleParameter): Promise<Frame[]> {
    if (image.length > 1) {
      throw new RangeError('Image should have one frame.')
    }
    return [image[0], image[0]]
  }
}

export { Duplicate }
