
import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { SimpleAnimatedParameter } from '../parameters/SimpleAnimatedParameter.js'

class Speed extends ImagescriptTransformation {
  CYCLE = 360
  async imagescriptTransform (image: Frame[], args: SimpleAnimatedParameter): Promise<Frame[]> {
    // iterating over the angles, while looping over the frames of the input.
    return image.map(frame => Frame.from(
      frame.clone(),
      args.frameDuration,
      undefined,
      undefined,
      Frame.DISPOSAL_BACKGROUND))
  }
}

export { Speed }
