const { globalLoc } = require('../../globals');
const { format } = require(globalLoc + 'date-fns');
const { v4: uuid } = require(globalLoc + 'uuid');

const fs = require('fs');
const fsPromises = require('fs').promises; // why did you not do fs.promises?
const path = require('path');

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fs.promises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fs.promises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
  } catch (err) {
    console.error(err);
  }
}

module.exports = logEvents;