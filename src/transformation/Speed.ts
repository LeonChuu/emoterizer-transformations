
import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { SimpleAnimatedParameter } from '../parameters/SimpleAnimatedParameter.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'

class Speed extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: SimpleAnimatedParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => frame.clone()), image, args)
  }
}

export { Speed }
