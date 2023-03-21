
import { Image, Frame, decode as decodeB, GIF, ImageType } from 'imagescript'
import { decode as decodeAPNG } from 'lib-upng'
/**
 * Checks the validity of a  0 > value < 100  and scales it to the range of 0 to maxValue.
 * @param value Value to be scaled.
 * @param maxValue Max value in the range of 0 to maxValue.
 * @returns scaled value.
 */
function checkAndScaleHundredth (value: number, maxValue: number): number {
  if (value <= 0 || value >= 100) {
    throw RangeError(String(value) + ' is out of range 0 to 100.')
  }

  return value * maxValue / 100
}

function checkDelay (delay: number): number {
  if (delay < 1) {
    throw RangeError(String(delay) + 'should be greater than 1.')
  }
  return delay
}

function mod (n: number, m: number): number {
  return ((n % m) + m) % m
}

/**
 * Flips an image on the horizontal or vertical axis.
 * @param image
 * @param horizontal
 * @param vertical
 * @returns
 */
function flip (image: Frame | Image, horizontal: boolean, vertical: boolean): Image {
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

/**
 * Gets a buffer with an image and separates it into an array of Frames.
 * @param image
 * @returns
 */
async function decode (image: Buffer): Promise<Frame[]> {
  // const decodedData = toRGBA8(decodeAPNG(image)) as Buffer[]
  const decodedData = await decodeB(image)
  if (decodedData.constructor.name === 'GIF') {
    const decodedGif = decodedData as GIF
    return Array.from(decodedGif.values())
  } else {
    const decodedImage = decodedData as Image
    return [Frame.from(decodedImage)]
  }
}

function mapToFrames (imageList: Image[], originalFrames: Frame[], frameDuration?: number, disposalType: string = Frame.DISPOSAL_BACKGROUND): Frame[] {
  return imageList.map(
    (frame, index) => Frame.from(
      frame,
      frameDuration === undefined ? originalFrames[index % originalFrames.length].duration : frameDuration,
      0,
      0,
      disposalType))
}

function imagesToFrames (imageList: Image[]): Frame[] {
  return imageList.map(image => Frame.from(image, undefined, undefined, undefined, Frame.DISPOSAL_BACKGROUND))
}

export { checkAndScaleHundredth, checkDelay, mod, flip, decode, mapToFrames, imagesToFrames }
