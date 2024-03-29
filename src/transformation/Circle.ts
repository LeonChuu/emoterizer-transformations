import { CircleParameter } from '../parameters/CircleParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'

class Circle extends ImagescriptTransformation<CircleParameter> {
  async imagescriptTransform (image: Frame[], args: CircleParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => frame.cropCircle(args.largerDimension, args.feathering)), image)
  }
}

const circle = new Circle()
export { circle, Circle }
