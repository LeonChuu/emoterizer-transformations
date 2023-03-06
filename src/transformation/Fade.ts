import { Frame, Image } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { FadeParameter } from '../parameters/FadeParameter.js'
import { mapToFrames } from '../transformationUtils.js'

class Fade extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FadeParameter): Promise<Frame[]> {
    const outputImageList: Image[] = []
    const width = image[0].width
    const height = image[0].height

    if (args.frameNumber <= 1) {
      return image
    }

    const mask: number[][] = []
    const empty = new Image(width, height).fill(0)
    const numberOfPixelsToFade = Math.trunc((width * height) / args.frameNumber)
    const heightList = [...Array(height).keys()]
    const pixelList = this.shuffle([...Array(width).keys()].flatMap(wValue => heightList.map(hValue => [wValue, hValue])))
    for (let i = 0, frameIndex = 0; i < (args.frameNumber - 1); i++, frameIndex = (frameIndex + 1) % image.length) {
      if (i === 0) {
        outputImageList.push(image[0].clone())
        continue
      }
      for (let j = 0; j < numberOfPixelsToFade; j++) {
        const pixelToFade = pixelList.pop() as number[]
        mask.push(pixelToFade)
      }
      const currentFrame = image[frameIndex].clone()
      mask.forEach(pixel => { currentFrame.setPixelAt(pixel[0] + 1, pixel[1] + 1, 0) })
      outputImageList.push(currentFrame)
    }
    outputImageList.push(empty)

    const result = mapToFrames(outputImageList, image, args.frameDuration)
    result[result.length - 1].duration = args.lastFrameDuration
    return result
  }

  shuffle (a): number[][] {
    var j, i: number
    var x: number[]
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }
}

export { Fade }
