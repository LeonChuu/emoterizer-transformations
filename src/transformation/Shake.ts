import { Frame, Image } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { ShakeParameter } from '../parameters/ShakeParameter.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'
class Shake extends ImagescriptTransformation {
  // star-shaped movement for the shakes
  movement = [[1, 0], [-1, -1], [0, 1], [1, 0], [-1, 1]]
  async imagescriptTransform (image: Frame[], args: ShakeParameter): Promise<Frame[]> {
    const intensity = Math.abs(args.intensity) / 100
    if ((intensity <= 0) || (intensity > 1)) {
      throw new RangeError('intensity must be between 1 and 100')
    }
    const firstFrame = image[0]
    const height = firstFrame.height
    const width = firstFrame.width
    const intensityWidth = intensity * width
    const intensityHeight = intensity * height
    const emptyFrame = new Image(width + 2 * intensityWidth, height + 2 * intensityHeight).fill(0x00000000)
    const maxFrames = Math.max(image.length, this.movement.length)

    const outputImageList: Image[] = []
    for (let i = 0; i < maxFrames; i++) {
      const currentMovement = this.movement[i % this.movement.length]
      const currentFrame = image[i % image.length].clone()
      outputImageList.push(
        emptyFrame.clone().composite(
          currentFrame,
          intensityWidth + currentMovement[0] * intensityWidth,
          intensityHeight + currentMovement[1] * intensityHeight
        )
      )
    }
    return imageToAnimatedFrames(outputImageList.map(imageFrame => imageFrame.crop(intensityWidth, intensityHeight, width, height)), image, args)
  }
}

const shake = new Shake()
export { shake, Shake }
