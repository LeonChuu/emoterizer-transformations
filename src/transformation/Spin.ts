import { SpinParameter } from '../parameters/SpinParameter.js'

import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { checkAndScaleHundredth } from '../transformationUtils.js'

class Spin extends ImagescriptTransformation {
  CYCLE = 360
  async imagescriptTransform (image: Frame[], args: SpinParameter): Promise<Frame[]> {
    const angle = checkAndScaleHundredth(args.speed, this.CYCLE)
    const result: Frame[] = []

    // iterating over the angles, while looping over the frames of the input.
    for (let cumulativeAngle = 0, frameIndex = 0;
      cumulativeAngle < this.CYCLE;
      cumulativeAngle += angle, frameIndex = (frameIndex + 1) % image.length) {
      console.log(cumulativeAngle)
      result.push(Frame.from(
        image[frameIndex].clone().rotate(cumulativeAngle, false),
        args.frameDuration,
        undefined,
        undefined,
        Frame.DISPOSAL_BACKGROUND))
    }

    return result
  }
}

export { Spin }
