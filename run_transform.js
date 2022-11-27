import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Fade } from './dist/src/transformation/Fade.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'
import { FadeParameter } from './dist/src/parameters/FadeParameter.js'

if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new Fade()
const test = transformation.transform(file, new FadeParameter('test', 0))

test.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
