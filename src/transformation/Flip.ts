import { FlipParameter } from '../parameters/FlipParameter'

import { Image, Frame} from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation'

// to implement
class Flip extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FlipParameter): Promise<Frame[]> {
    return image.map(frame => frame)
  }
}

export { Flip }
