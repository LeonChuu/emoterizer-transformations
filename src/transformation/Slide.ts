import { Frame, Image } from 'imagescript'
import { mod } from '../transformationUtils.js'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { SlideParameter } from '../parameters/SlideParameter.js'
class Slide extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: SlideParameter): Promise<Frame[]> {
    const interval = Math.abs(args.interval) / 100
    const width = image[0].width
    if ((interval < 0) || (interval > 100)) {
      throw new RangeError('interval must be between 0 and 100')
    }
    if ((args.frames < 2)) {
      throw new RangeError('number of frames must be greater than 2')
    }

    const outputImageList: Image[] = []
    outputImageList.push(image[0].clone())
    const slice = (width + width * interval) / args.frames
    for (let i = 1; i < args.frames; i++) {
      const currentFrame = image[i % image.length].clone()
      outputImageList.push(this.slideFrame(currentFrame, i * slice, 0, interval * width))
    }
    return outputImageList.map(frame =>
      Frame.from(frame, args.frameDuration, undefined, undefined, Frame.DISPOSAL_BACKGROUND)
    )
  }

  private slideFrame (image: Frame | Image, deltaX: number, deltaY: number, interval: number): Image {
    const iterator = image.iterateWithColors()
    const result = image.clone()
    const virtualWidth = image.width + interval
    const virtualHeight = image.height + interval
    let px = iterator.next()
    while (px.done !== true && px.done !== undefined) {
      const val = px.value as [x: number, y: number, color: number]
      const sourceX = mod(val[0] - deltaX, virtualWidth) + 1
      const sourceY = mod(val[1] - deltaY, virtualHeight) + 1
      let color: number
      if ((sourceX > image.width) || (sourceY > image.height)) {
        color = 0
      } else {
        color = image.getPixelAt(sourceX, sourceY)
      }
      result.setPixelAt(val[0], val[1], color)
      px = iterator.next()
    }
    return result
  }
}

export { Slide }
