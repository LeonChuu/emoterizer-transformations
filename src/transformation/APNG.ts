import { Transformation } from '../../Transformation.js'
import { decode, throwIfOverLimitSize } from '../transformationUtils.js'
import { encode } from 'lib-upng'
import { APNGTransformationParameter } from '../parameters/APNGTransformationParameter.js'

class APNG extends Transformation {
  COLOR_CHANNELS = 3
  ALPHA_CHANNELS = 1
  BITS = 8
  async transform (image: Buffer, args: APNGTransformationParameter, decodedSizeLimit?: number | undefined): Promise<Buffer> {
    const frames = await decode(image)

    throwIfOverLimitSize(frames, decodedSizeLimit)
    // const result = encodeLL(frames.map(frame => frame.bitmap), frames[0].width, frames[0].height,
    // this.COLOR_CHANNELS, this.ALPHA_CHANNELS, this.BITS, frames.map(frame => frame.duration))

    const result = encode(frames.map(frame => frame.bitmap), frames[0].width, frames[0].height, args.colorNumber, frames.map(frame => frame.duration))
    return Buffer.from(result)
  }
}

const apng = new APNG()
export { apng, APNG }
