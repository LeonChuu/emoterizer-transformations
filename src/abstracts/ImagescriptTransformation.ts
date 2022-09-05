import { Image, GIF, Frame, decode as decodeB } from 'imagescript'
import { TransformationParameter } from '../parameters/TransformationParameter.js'
import { Transformation } from '../../Transformation.js'

abstract class ImagescriptTransformation extends Transformation {
  async transform (image: Buffer, args: TransformationParameter): Promise<Buffer> {
    const encodedImage = await this.decode(image)
    return await this.encodeFrames(await this.imagescriptTransform(encodedImage, args))
  }

  /**
   * Gets a buffer with an image and separates it into an array of Frames.
   * @param image
   * @returns
   */
  async decode (image: Buffer): Promise<Frame[]> {
    console.log(image)
    const decodedData = await decodeB(image)
    if (decodedData.constructor.name === 'GIF') {
      console.log(decodedData)
      const decodedGif = decodedData as GIF
      return Array.from(decodedGif.values())
    } else {
      const decodedImage = decodedData as Image
      return [Frame.from(decodedImage)]
    }
  }

  abstract imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]>

  async encodeFrames (frameList: Frame[]): Promise<Buffer> {
    const result = new GIF(frameList)
    return Buffer.from(await result.encode(100))
  }
}

export { ImagescriptTransformation }
