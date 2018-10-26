let fileUrl = require('file-url');
let minimist = require('minimist');
let opn = require('opn');

let argv = minimist(process.argv.slice(2));

async function openAsync(p) {
  let url = fileUrl(p);
  return await opn(url, {app: ['Castle', '--incognito']});
} 

module.exports = {
  openAsync,
};

if (require.main === module) {
  openAsync(argv[0] || '.')
    .then(() => {
      // done
    })
    .catch(err => {
      console.error(err);
    });
}
