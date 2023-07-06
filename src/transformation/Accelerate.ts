import { Frame } from 'imagescript'
import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { AccelerateParameter } from '../parameters/AccelerateParameter.js'

class Accelerate extends ImagescriptTransformation<AccelerateParameter> {
  async imagescriptTransform (image: Frame[], args: AccelerateParameter): Promise<Frame[]> {
    const outputFrameList: Frame[] = []
    if ((image.length < 2) || (args.acceleration === 0)) {
      return image
    }

    const acceleration = -args.acceleration

    // accelerates up to the middle frame, and then slows down back to the beginning
    if (args.middle) {
      const middle = Math.floor(image.length / 2)
      for (let i = 0; i < middle; i++) {
        const imageFrame = Frame.from(image[i].clone(), image[i].duration + i * acceleration)

        outputFrameList.push(imageFrame)
      }
      for (let i = middle; i < image.length; i++) {
        const imageFrame = Frame.from(image[i].clone(), image[i].duration + (2 * middle - i) * acceleration)

        outputFrameList.push(imageFrame)
      }
    } else {
      for (let i = 0; i < image.length; i++) {
        const imageFrame = Frame.from(image[i].clone(), image[i].duration + i * acceleration)

        outputFrameList.push(imageFrame)
      }
    }

    return outputFrameList.map((frame, i) => {
      frame.disposalMode = image[i].disposalMode
      return frame
    })
  }
}
const accelerate = new Accelerate()
export { Accelerate, accelerate }
