import { FisheyeParameter } from '../parameters/FisheyeParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

class Fisheye extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FisheyeParameter): Promise<Frame[]> {
    return image.map(frame => Frame.from(frame.fisheye(args.radius), undefined, undefined, undefined, Frame.DISPOSAL_BACKGROUND))
  }
}

export { Fisheye }
