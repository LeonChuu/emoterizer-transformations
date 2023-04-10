import { GIF, Frame } from 'imagescript'
import { decode, throwIfOverLimitSize } from '../transformationUtils.js'
import { TransformationParameter } from '../parameters/TransformationParameter.js'
import { Transformation } from '../../Transformation.js'
import { AnimatedTransformationParameter } from '../parameters/AnimatedTransformationParameter.js'

abstract class ImagescriptTransformation extends Transformation {
  async transform (image: Buffer, args: AnimatedTransformationParameter, decodedSizeLimit?: number): Promise<Buffer> {
    const decodedImage = await decode(image)
    throwIfOverLimitSize(decodedImage, decodedSizeLimit)
    return await this.encodeFrames(
      await this.imagescriptTransform(decodedImage, args)
    )
  }

  abstract imagescriptTransform (image: Frame[], args: TransformationParameter): Promise<Frame[]>

  private async encodeFrames (frameList: Frame[]): Promise<Buffer> {
    const result = new GIF(frameList)
    return Buffer.from(await result.encode(100))
  }
}

export { ImagescriptTransformation }
