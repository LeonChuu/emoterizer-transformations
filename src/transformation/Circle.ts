import { CircleParameter } from '../parameters/CircleParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

class Circle extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: CircleParameter): Promise<Frame[]> {
    return image.map(frame => Frame.from(frame.cropCircle(args.largerDimension, args.feathering), undefined, undefined, undefined, Frame.DISPOSAL_BACKGROUND))
  }
}

export { Circle }
