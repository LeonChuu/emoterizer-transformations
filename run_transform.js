import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Fisheye } from './dist/src/transformation/Fisheye.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'
import { HueParameter } from './dist/src/parameters/HueParameter.js'
import { FisheyeParameter } from './dist/src/parameters/FisheyeParameter.js'

if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new Fisheye()
const test = transformation.transform(file, new FisheyeParameter('test', 2))

test.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
