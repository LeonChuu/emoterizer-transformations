
/**
 * Checks the validity of a  0 > value < 100  and scales it to the range of 0 to maxValue.
 * @param value Value to be scaled.
 * @param maxValue Max value in the range of 0 to maxValue.
 * @returns scaled value.
 */
function checkAndScaleHundredth(value: number, maxValue: number): number {
  if (value <= 0 || value >= 100) {
    throw RangeError(String(value) + ' is out of range 0 to 100.')
  }

  return value * maxValue / 100
}

function checkDelay(delay: number): number {
  if (delay < 1) {
    throw RangeError(String(delay) + 'should be greater than 1.')
  }
  return delay
}

export { checkAndScaleHundredth, checkDelay }
