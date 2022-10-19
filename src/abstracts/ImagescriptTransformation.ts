import { Image, GIF, Frame, decode as decodeB } from 'imagescript'
import { TransformationParameter } from '../parameters/TransformationParameter.js'
import { Transformation } from '../../Transformation.js'

abstract class ImagescriptTransformation extends Transformation {
  async transform (image: Buffer, args: TransformationParameter, decodedSizeLimit?: number): Promise<Buffer> {
    const decodedImage = await this.decode(image)
    if (decodedSizeLimit !== undefined) {
      const currentSize = decodedImage.reduce((prev, curr: Frame) => { return prev + curr.height * curr.width }, 0)
      console.log(currentSize)
      if (currentSize > decodedSizeLimit) {
        throw new RangeError('Size of decoded image is larger than ' + decodedSizeLimit.toString())
      }
    }
    return await this.encodeFrames(await this.imagescriptTransform(decodedImage, args))
  }

  /**
   * Gets a buffer with an image and separates it into an array of Frames.
   * @param image
   * @returns
   */
  private async decode (image: Buffer): Promise<Frame[]> {
    const decodedData = await decodeB(image)
    if (decodedData.constructor.name === 'GIF') {
      const decodedGif = decodedData as GIF
      return Array.from(decodedGif.values())
    } else {
      const decodedImage = decodedData as Image
      return [Frame.from(decodedImage)]
    }
  }

  abstract imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]>

  private async encodeFrames (frameList: Frame[]): Promise<Buffer> {
    const result = new GIF(frameList)
    return Buffer.from(await result.encode(100))
  }
}

export { ImagescriptTransformation }
