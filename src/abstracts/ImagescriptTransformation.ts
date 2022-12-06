import { GIF, Frame } from 'imagescript'
import { decode } from '../transformationUtils.js'
import { TransformationParameter } from '../parameters/TransformationParameter.js'
import { Transformation } from '../../Transformation.js'

abstract class ImagescriptTransformation extends Transformation {
  async transform (image: Buffer, args: TransformationParameter, decodedSizeLimit?: number): Promise<Buffer> {
    const decodedImage = await decode(image)
    if (decodedSizeLimit !== undefined) {
      const currentSize = decodedImage.reduce((prev, curr: Frame) => { return prev + curr.height * curr.width }, 0)
      console.log(currentSize)
      if (currentSize > decodedSizeLimit) {
        throw new RangeError('Size of decoded image is larger than ' + decodedSizeLimit.toString())
      }
    }
    return await this.encodeFrames(await this.imagescriptTransform(decodedImage, args))
  }

  abstract imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]>

  private async encodeFrames (frameList: Frame[]): Promise<Buffer> {
    const result = new GIF(frameList)
    return Buffer.from(await result.encode(100))
  }
}

export { ImagescriptTransformation }
