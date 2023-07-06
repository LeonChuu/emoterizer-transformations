import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { Frame, Image } from 'imagescript'
import { WobbleParameter } from '../parameters/WobbleParameter.js'
import { imageToAnimatedFrames } from '../transformationUtils.js'

class Wobble extends ImagescriptTransformation<WobbleParameter> {
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
      // see x and y offset, composite it into an empty frame instead
      const resizedFrame = frame.resize(width * squish[0], height * squish[1])

      // set offset for hand here
      return emptyFrame.clone().composite(resizedFrame, squishOffsetx, squishOffsety)
    })

    return imageToAnimatedFrames(outputImageList, image, args)
  }
}

const wobble = new Wobble()
export { wobble, Wobble }
