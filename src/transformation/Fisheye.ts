import { FisheyeParameter } from '../parameters/FisheyeParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'

class Fisheye extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FisheyeParameter): Promise<Frame[]> {
    return imageToAnimatedFrames(image.map(frame => frame.fisheye(args.radius)), image)
  }
}

const fisheye = new Fisheye()
export { fisheye, Fisheye }
