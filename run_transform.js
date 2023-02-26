import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Composite } from './dist/src/transformation/Composite.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'
import { CompositeParameter } from './dist/src/parameters/CompositeParameter.js'
import { decode as decodeB, Image, Frame, } from 'imagescript'
import { encode, decode } from 'lib-upng'
import { APNG } from './dist/src/transformation/APNG.js'
if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new APNG()

const result = transformation.transform(file, { transformationName: 'test', frameDuration: 20 })
/*
decodeB(fs.readFileSync('./santa.png')).then(frame => {
  const frameAR = frame.clone().invert()
  const frameBR = frame.clone().rotate(110, false)
  const data = [frameAR.bitmap, frameBR.bitmap]
  console.log(data)
  const result = encode(data, frameBR.width, frameBR.height, 0, [20, 20])
  console.log('result')
  console.log(result)
  fs.writeFileSync(process.argv[3], new Uint8Array(result))
}).catch(e => console.error(e))
*/
// const test = transformation.transform(file, new CompositeParameter('test', fs.readFileSync('./santa.png'), 30, -20, 100))

result.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
