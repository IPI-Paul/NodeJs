const { globalLoc } = require('../globals');
const { format } = require(globalLoc + 'date-fns');
const { v4: uuid } = require(globalLoc + 'uuid');

const fs = require('fs');
const fsPromises = require('fs').promises; // why did you not do fs.promises?
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    await fs.promises.appendFile(path.join(__dirname, 'logs', 'evenLog.txt'), logItem);
  } catch (err) {
    console.error(err);
  }
}

module.exports = logEvents;