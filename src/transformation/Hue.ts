
import { Frame, Image } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { HueParameter } from '../parameters/HueParameter.js'

class Hue extends ImagescriptTransformation {
  CYCLE = 360
  async imagescriptTransform (image: Frame[], args: HueParameter): Promise<Frame[]> {
    // iterating over the angles, while looping over the frames of the input.
    const outputImageList: Image[] = []
    const shift = 360 / args.frames

    if ((args.frames < 2)) {
      throw new RangeError('number of frames must be greater than 1')
    }
    for (let i = 0; i < args.frames; i++) {
      outputImageList.push(image[i % image.length].clone().hueShift(shift * i))
    }
    return outputImageList.map(frame => Frame.from(
      frame,
      args.frameDuration,
      undefined,
      undefined,
      Frame.DISPOSAL_BACKGROUND))
  }
}

export { Hue }
