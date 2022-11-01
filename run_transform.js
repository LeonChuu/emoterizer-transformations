import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Circle } from './dist/src/transformation/Circle.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'
import { HueParameter } from './dist/src/parameters/HueParameter.js'
import { CircleParameter } from './dist/src/parameters/CircleParameter.js'

if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new Circle()
const test = transformation.transform(file, new CircleParameter('test', true, 10))

test.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
