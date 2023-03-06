import { Transformation } from '../../Transformation.js'
import { decode } from '../transformationUtils.js'
import { encodeLL } from 'lib-upng'
import { AnimatedTransformationParameter } from '../parameters/AnimatedTransformationParameter.js'

class APNG extends Transformation {
  async transform (image: Buffer, args: AnimatedTransformationParameter, decodedSizeLimit?: number | undefined): Promise<Buffer> {
    const frames = await decode(image)
    const result = encodeLL(frames.map(frame => frame.bitmap), frames[0].width, frames[0].height, 3, 1, 8, frames.map(frame => frame.duration))

    return Buffer.from(result)
  }
}

export { APNG }
