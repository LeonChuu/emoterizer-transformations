import { SimpleParameter } from '../parameters/SimpleParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { mapToFrames } from '../transformationUtils.js'

class Invert extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: SimpleParameter): Promise<Frame[]> {
    return mapToFrames(image.map(frame => frame.invert()), image, undefined)
  }
}

export { Invert }
