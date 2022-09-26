import { SimpleParameter } from '../parameters/SimpleParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

class Invert extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: SimpleParameter): Promise<Frame[]> {
    return image.map(frame => Frame.from(frame.invert()))
  }
}

export { Invert }