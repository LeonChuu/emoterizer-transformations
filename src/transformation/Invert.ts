
import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'
import { TransformationParameter } from '../parameters/TransformationParameter.js'

class Invert extends ImagescriptTransformation<TransformationParameter> {
  async imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => frame.invert()), image)
  }
}

const invert = new Invert()
export { invert, Invert }
