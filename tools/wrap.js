const fs = require('fs');

wrap('estimate-effort');
wrap('calculate-costs');
wrap('clipboard');

function wrap(file) {
  fs.readFile(`build/min/${file}.js`, (err, data) => {
    if (err) throw err;
    const output = `javascript:${data}`;
    const filePath = `./bookmark-urls/${file}`;
    fs.writeFile(filePath, output, 'utf8', err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`created new bookmark url ${filePath}`);
    });
  });  
}
