import { TransformationParameter } from './src/parameters/TransformationParameter'
abstract class Transformation {
  /**
   * Executes an image transformation, generating an array with one or more frames.
   * @param args TransformationParameter containing buffer with image.
   */
  abstract transform (image: Buffer, args: TransformationParameter): Promise<Buffer>
}

export { Transformation }
