import { FlipParameter } from '../parameters/FlipParameter.js'

import { Frame } from 'imagescript'
import { flip as flipFrame, imageToAnimatedFrames } from '../transformationUtils.js'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

class Flip extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FlipParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => flipFrame(frame, args.horizontal, args.vertical)), image, args)
  }
}

const flip = new Flip()
export { flip, Flip }
