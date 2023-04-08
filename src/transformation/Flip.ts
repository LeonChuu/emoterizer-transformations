import { FlipParameter } from '../parameters/FlipParameter.js'

import { Frame } from 'imagescript'
import { flip, imageToAnimatedFrames } from '../transformationUtils.js'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

class Flip extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FlipParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => flip(frame, args.horizontal, args.vertical)), image, args)
  }
}

export { Flip }
