import { Image, GIF, Frame, decode as decodeB } from 'imagescript'
import { TransformationParameter } from '../parameters/TransformationParameter'
import { Transformation } from './Transformation'

abstract class ImagescriptTransformation extends Transformation {
  async transform (image: Buffer, args: TransformationParameter): Promise<Buffer> {
    const encodedImage = await this.decode(image)
    return await this.encodeFrames(await this.imagescriptTransform(encodedImage))
  }

  /**
   * Gets a buffer with an image and separates it into an array of Frames.
   * @param image
   * @returns
   */
  async decode (image: Buffer): Promise<Frame[]> {
    const decodedData = await decodeB(image)
    if (decodedData.constructor.name === 'GIF') {
      const decodedGif = decodedData as GIF
      return decodedGif
    } else {
      const decodedImage = decodedData as Image
      return [Frame.from(decodedImage)]
    }
  }

  abstract imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]>

  async encodeFrames (frameList: Frame[]): Promise<Buffer> {
    const result = new GIF(frameList)
    return Buffer.from(await result.encode(30))
  }
}

export { ImagescriptTransformation }
