import { ImagescriptTransformation } from '../abstracts/ImagescriptTransformation.js'
import { Frame, Image } from 'imagescript'
import { CompositeParameter } from '../parameters/CompositeParameter.js'
import { decode, imageToAnimatedFrames } from '../transformationUtils.js'

class Composite extends ImagescriptTransformation {
  async imagescriptTransform (image: Frame[], args: CompositeParameter): Promise<Frame[]> {
    const imageOnTop: Image[] = (await decode(args.imageOnTop)).map(frame => frame.resize(image[0].width, image[0].height))
    const outputImageList = image.map((frame, i) => {
      return frame
        .clone()
        .composite(imageOnTop[i % imageOnTop.length]
          .clone(), args.offsetX, args.offsetY)
    })

    return imageToAnimatedFrames(outputImageList, image, args)
  }
}

const composite = new Composite()
export { composite, Composite }
