import { FisheyeParameter } from '../parameters/FisheyeParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { mapToFrames } from '../transformationUtils.js'

class Fisheye extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FisheyeParameter): Promise<Frame[]> {
    return mapToFrames(image.map(frame => frame.fisheye(args.radius)), image, undefined)
  }
}

export { Fisheye }
