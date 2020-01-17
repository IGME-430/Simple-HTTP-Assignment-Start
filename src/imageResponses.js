const fs = require('fs');

const dankmemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankmemes);
  response.end();
};

module.exports.getImage = getImage;
