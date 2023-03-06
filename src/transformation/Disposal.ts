import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { DisposalParameter } from '../parameters/DisposalParameter.js'
import { mapToFrames } from '../transformationUtils.js'

class Disposal extends ImagescriptTransformation {
  CYCLE = 360
  async imagescriptTransform (image: Frame[], args: DisposalParameter): Promise<Frame[]> {
    // iterating over the angles, while looping over the frames of the input.

    return mapToFrames(image.map(frame => frame.clone()), image, undefined, args.disposalType)
  }
}

export { Disposal }
