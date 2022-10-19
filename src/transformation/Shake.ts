import { Frame, Image } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { ShakeParameter } from '../parameters/ShakeParameter.js'
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
    return outputImageList.map(imageFrame =>
      Frame.from(
        imageFrame.crop(intensityWidth, intensityHeight, width, height),
        args.frameDuration,
        undefined,
        undefined,
        Frame.DISPOSAL_BACKGROUND
      )
    )
/*
    delay = parseInt(delay) || gifwrapDefaultDelay
    const width = gif.width
    const height = gif.height
    intensity = this.validateIntensity(Math.abs(parseInt(intensity)), width, height) || defaultShake

    const outputFrameList = []

    const gifLength = gif.frames.length
    const maxFrames = Math.max(gifLength, movement.length)

    for (let i = 0; i < maxFrames; i++) {
      const currentMovement = movement[i % movement.length]
      const frame = GifUtil.copyAsJimp(Jimp, gif.frames[i % gifLength].bitmap)

      frame.contain(width + 2 * intensity, height + 2 * intensity)

      const shakenFrame = new BitmapImage(frame.bitmap).reframe(
        intensity + currentMovement[0] * intensity,
        intensity + currentMovement[1] * intensity,
        width, height, 0)

      outputFrameList.push(new GifFrame(shakenFrame))
    }

    let outputGif = new PseudoGif(outputFrameList, height, width)
    if (delay !== gifwrapDefaultDelay) {
      outputGif = Speed.transform(outputGif, { delay })
    }
    return outputGif
  }

  // TODO pass this validation outside. Not crucial to execution.
  static validateIntensity (intensity, width, height) {
    if ((intensity >= width) || (intensity >= height)) {
      throw RangeError('Intensity must be lower than height and width of image!')
    }
    return intensity
  }
  */

  }
}

export { Shake }
