'use strict'
const execSync = require('child_process').execSync
const pkg = require('update-pkg')

const data = pkg.data()

const size = execSync('du -k "dist/bootcss.min.css" | cut -f1')
  .toString()
  .trim()

data.size = `${size}KB`

pkg.update(data)
