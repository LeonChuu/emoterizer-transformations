import { SpinParameter } from '../parameters/SpinParameter.js'

import { Frame, Image } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { checkAndScaleHundredth, imageToAnimatedFrames } from '../transformationUtils.js'

class Spin extends ImagescriptTransformation {
  CYCLE = 360
  async imagescriptTransform (image: Frame[], args: SpinParameter): Promise<Frame[]> {
    const angle = checkAndScaleHundredth(args.speed, this.CYCLE)
    const result: Image[] = []

    // iterating over the angles, while looping over the frames of the input.
    for (let cumulativeAngle = 0, frameIndex = 0;
      cumulativeAngle < this.CYCLE;
      cumulativeAngle += angle, frameIndex = (frameIndex + 1) % image.length) {
      result.push(image[frameIndex].clone().rotate(cumulativeAngle, false))
    }

    return imageToAnimatedFrames(result, image, args)
  }
}

const spin = new Spin()
export { spin, Spin }
