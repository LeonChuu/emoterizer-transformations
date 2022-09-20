import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import * as fs from 'fs'
import * as path from 'path'
import { Frame, Image, GIF } from 'imagescript'
import { PatParameter } from '../parameters/PatParameter.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const filenamevar = fileURLToPath(import.meta.url)
const dirnamevar = dirname(filenamevar)

class Pat extends ImagescriptTransformation {
  patGif: Promise<Frame[]>
  constructor () {
    super()
    const pat = fs.readFileSync(path.resolve(dirnamevar, '../../resources/pat.gif'))
    this.patGif = GIF.decode(pat).then(gif => Array.from(gif)) as Promise<Frame[]>
  }

  async imagescriptTransform (image: Frame[], args: PatParameter): Promise<Frame[]> {
    const firstFrame = image[0]
    const height = firstFrame.height
    const width = firstFrame.width
    const length = image.length
    const origpat = (await this.patGif).map(frame => frame.resize(width, height))
    const emptyFrame = new Image(width, height).fill(0x00000000)

    let argSquishOffsetx = 0
    let argSquishOffsety = 0
    let argHandOffsetx = 0
    let argHandOffsety = 0
    // ensuring there is no division by 0
    const squishVal = Math.max(0.01, (100 - Math.abs(args.squish.valueOf())) / 100)
    const squishFactor = [
      [1.0, 1.0],
      [1.1 / squishVal, 0.90 * squishVal],
      [1.2 / squishVal, 0.83 * squishVal],
      [1.1 / squishVal, 0.85 * squishVal]
    ]
    if (length === 1) {
      image = Array.from(Array(4), () => Frame.from(image[0].clone()))
    }
    const outputFrameList = image.map((frame, i) => {
      const squishIndex = i % squishFactor.length
      const patIndex = i % origpat.length
      const squish = squishFactor[squishIndex]
      const squishOffsety = height * (1 - squish[1])
      const squishOffsetx = ((width * (1 - squish[0])) / 2)
      const handOffsety = height * (0.82 - squish[1])
      // const handOffsety = height * (0.9 - squish[1])
      // const handOffsetx = 0
      console.log(squish)
      console.log(height)
      console.log(width)
      //see x and y offset, composite it into an empty frame instead
      const resizedFrame = frame.resize(width * squish[0], height * squish[1])

      //set offset for hand here
      return emptyFrame.clone().composite(resizedFrame, squishOffsetx, squishOffsety).composite(origpat[patIndex], 0, handOffsety)
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
    return outputFrameList.map(frame => Frame.from(
      frame,
      args.frameDuration,
      undefined,
      undefined,
      Frame.DISPOSAL_BACKGROUND
    ))
  }
}

export { Pat }
