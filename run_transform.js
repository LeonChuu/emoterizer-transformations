import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Disposal } from './dist/src/transformation/Disposal.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'
import { DisposalParameter } from './dist/src/parameters/DisposalParameter.js'
import { decode as decodeB, Image, Frame, } from 'imagescript'
import { encode, decode } from 'lib-upng'
import { APNG } from './dist/src/transformation/APNG.js'
if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new APNG()

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
const test = transformation.transform(file, {colorNumber: 0})

test.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
