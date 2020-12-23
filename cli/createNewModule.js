const fs = require('fs');
const path = require('path');
const util = require('util');

const createDir = util.promisify(fs.mkdir);
const appendFile = util.promisify(fs.appendFile);

const createNewModule = async () => {
  const model = (process.argv[2] && process.argv[2]) || '';

  if (!module) {
    return false;
  }

  try {
    const fileName = ['controller', 'entity', 'module', 'provider', 'service'];

    await createDir(`src/models/${model}`);

    for (let i = 0; i < fileName.length; i++) {
      await appendFile(`src/models/${model}/${fileName[i]}.js`, 'sadasd');
    }
  } catch (err) {
    return console.error('custom', err);
  }
};

createNewModule();
