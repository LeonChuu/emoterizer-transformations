import { FlipParameter } from '../parameters/FlipParameter.js'

import { Image, Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'

// to implement
class Flip extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: FlipParameter): Promise<Frame[]> {
    return image.map(frame => this.flip(frame, args.horizontal, args.vertical)).map(frame =>
      Frame.from(frame, undefined, undefined, undefined, Frame.DISPOSAL_BACKGROUND)
    )
  }

  private flip (image: Frame | Image, horizontal: boolean, vertical: boolean): Image {
    const frame = image.clone()
    if (!(horizontal || vertical)) {
      return frame
    }
    const iterator = image.iterateWithColors()
    let px = iterator.next()
    let deltaX = (x: number): number => x
    if (horizontal) {
      deltaX = (x: number): number => (image.width + 1) - x
    }

    let deltaY = (x: number): number => x
    if (vertical) {
      deltaY = (x: number): number => (image.height + 1) - x
    }

    while (px.done !== true && px.done !== undefined) {
      const val = px.value as [x: number, y: number, color: number]
      const color = image.getPixelAt(deltaX(val[0]), deltaY(val[1]))
      frame.setPixelAt(val[0], val[1], color)
      px = iterator.next()
    }
    return frame
  }
}

export { Flip }
