'use strict'
const execSync = require('child_process').execSync
const pkg = require('update-pkg')

const data = pkg.data()

const size = execSync('stat -f "%z" dist/bootcss.min.css')
  .toString()
  .trim()

data.size = `${Math.floor(size / 1024)}KB`

pkg.update(data)
