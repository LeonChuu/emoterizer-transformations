import { Spin } from './dist/src/transformation/Spin.js'
import fs from 'fs'
import { SpinParameter } from './dist/src/parameters/SpinParameter.js'
import { Pat } from './dist/src/transformation/Pat.js'
import { PatParameter } from './dist/src/parameters/PatParameter.js'

if (process.argv.length !== 4) {
  console.log('argument should be file name and output name')
  process.exit(1)
}

const file = fs.readFileSync(process.argv[2])
const transformation = new Pat()
const test = transformation.transform(file, new PatParameter('tst', 50, 100))

test.then(buf => {
  fs.writeFileSync(process.argv[3], buf)
})
