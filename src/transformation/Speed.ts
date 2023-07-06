
import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { SimpleAnimatedParameter } from '../parameters/SimpleAnimatedParameter.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'

class Speed extends ImagescriptTransformation<SimpleAnimatedParameter> {
  async imagescriptTransform (image: Frame[], args: SimpleAnimatedParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => frame.clone()), image, args)
  }
}

const speed = new Speed()
export { speed, Speed }
