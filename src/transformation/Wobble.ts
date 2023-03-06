import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import * as fs from 'fs'
import * as path from 'path'
import { Frame, Image, GIF } from 'imagescript'
import { WobbleParameter } from '../parameters/WobbleParameter.js'
import { mapToFrames } from '../transformationUtils.js'

class Wobble extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: WobbleParameter): Promise<Frame[]> {
    const firstFrame = image[0]
    const height = firstFrame.height
    const width = firstFrame.width
    const length = image.length
    const emptyFrame = new Image(width, height).fill(0x00000000)
    if (args.squish > 100) {
      throw new RangeError('Squish should be between 1 and 100.')
    }
    let inputImage: Frame[] = image
    /*
    if (image.length < minSize) {
      inputImage = []
      while (inputImage.length < minSize) {
        image.forEach(frame => inputImage.push(
          Frame.from(
            frame.clone(),
            args.frameDuration,
            undefined,
            undefined,
            Frame.DISPOSAL_BACKGROUND
          )))
      }
    }
    */
    // ensuring there is no division by 0
    const squishVal = Math.max(0.01, (100 - Math.abs(args.squish.valueOf())) / 100)
    const squishFactor = [
      [0.9 * squishVal, 1.1 / squishVal],
      [0.95 * squishVal, 1.05 / squishVal],
      [1.1 / squishVal, 0.9 * squishVal],
      [1.05 / squishVal, 0.95 * squishVal]
    ]
    if (length === 1) {
      inputImage = Array.from(Array(4), () => Frame.from(image[0].clone()))
    }
    const outputImageList = inputImage.map((frame, i) => {
      const squishIndex = i % squishFactor.length
      const squish = squishFactor[squishIndex]
      const squishOffsety = height * (1 - squish[1])
      const squishOffsetx = ((width * (1 - squish[0])) / 2)
      // const handOffsety = height * (0.9 - squish[1])
      // const handOffsetx = 0
      console.log(squish)
      console.log(squishOffsetx)
      console.log(squishOffsety)
      // see x and y offset, composite it into an empty frame instead
      const resizedFrame = frame.resize(width * squish[0], height * squish[1])

      // set offset for hand here
      return emptyFrame.clone().composite(resizedFrame, squishOffsetx, squishOffsety)
    })
    /*

    const delay = parseInt(args.delay) || gifwrapDefaultDelay
    const toBlit = args.auxImage.frames

    const squishVal = (Math.max(0, (100 - Math.abs(squishArg)) / 100.0))
    const squishFactor = [[1.0, 1.0], [1.1 / squishVal, 0.90 * squishVal], [1.2 / squishVal, 0.85 * squishVal], [1.1 / squishVal, 0.93 * squishVal]]
    const background = GifUtil.copyAsJimp(Jimp, new BitmapImage(height, width, 0))

    const outputFrameList = toBlit.map((frame, index) => {
      const squish = squishFactor[index]
      const newFrame = inputFrameList[index % length].resize(width * squish[0], height * squish[1])
      const squishOffsety = height * (1 - squish[1]) + argSquishOffsety
      const squishOffsetx = ((width * (1 - squish[0])) / 2) + argSquishOffsetx
      const handOffsety = height * (0.9 - squish[1]) + argHandOffsety
      const handOffsetx = argHandOffsetx

      const original = background.clone().composite(newFrame,
        squishOffsetx, squishOffsety).clone()

      return []
    })
    */
    return mapToFrames(outputImageList, image, args.frameDuration)
  }
}

export { Wobble }
