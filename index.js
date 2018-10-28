#!/usr/bin/env node

let fileUrl = require('file-url');
let isUrl = require('is-url');
let minimist = require('minimist');
let path = require('path');
let opn = require('opn');

let argv = minimist(process.argv.slice(2));

async function openAsync(p) {
  let url;
  if (isUrl(p)) {
    url = p;
  } else {
    url = fileUrl(path.join(process.cwd(), p));
  }
  return opn(url, { app: ['Castle', '--incognito'] });
}

module.exports = {
  openAsync,
};

if (require.main === module) {
  openAsync(argv._[0] || '.')
    .then(() => {
      // done
    })
    .catch(err => {
      console.error(err);
    });
}
