import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Composite } from './dist/src/transformation/Composite.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'
import { CompositeParameter } from './dist/src/parameters/CompositeParameter.js'

if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new Composite()
const test = transformation.transform(file, new CompositeParameter('test', fs.readFileSync('./santa.png'), 30, -20, 100))

test.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
