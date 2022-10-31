import { FlipParameter } from '../parameters/FlipParameter.js'

import { Frame } from 'imagescript'
import { flip } from '../transformationUtils.js'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

// to implement
class Flip extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FlipParameter): Promise<Frame[]> {
    return image.map(frame => flip(frame, args.horizontal, args.vertical)).map(frame =>
      Frame.from(frame, undefined, undefined, undefined, Frame.DISPOSAL_BACKGROUND)
    )
  }
}

export { Flip }
