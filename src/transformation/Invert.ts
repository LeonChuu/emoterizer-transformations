import { InvertParameter } from '../parameters/InvertParameter'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation'

// to implement
class Invert extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: InvertParameter): Promise<Frame[]> {
    return image.map(frame => Frame.from(frame.invert()))
  }
}

export { Invert }
