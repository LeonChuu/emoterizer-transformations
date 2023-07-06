import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { Frame, Image } from 'imagescript'
import { ShuffleParameter } from '../parameters/ShuffleParameter.js'
import { flip, imageToAnimatedFrames } from '../transformationUtils.js'

class Shuffle extends ImagescriptTransformation<ShuffleParameter> {
  async imagescriptTransform (image: Frame[], args: ShuffleParameter): Promise<Frame[]> {
    let currentOrientationHorizontal: boolean = false
    let currentOrientationVertical: boolean = false
    const result: Image[] = []
    if (image.length === 1) {
      result.push(image[0].clone())
      result.push(flip(image[0], !args.isVertical, args.isVertical))
    } else {

    }
    image.forEach(frame => {
      result.push(flip(frame, currentOrientationHorizontal, currentOrientationVertical))
      if (args.isVertical) {
        currentOrientationVertical = !currentOrientationVertical
      } else {
        currentOrientationHorizontal = !currentOrientationHorizontal
      }
    })
    return imageToAnimatedFrames(result, image, args)
  }
}

const shuffle = new Shuffle()
export { shuffle, Shuffle }
