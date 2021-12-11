// Web scraping in Node
const { global } = require('./globals');
const rp = require(global + 'request-promise');
const cheerio = require(global + 'cheerio');
const Table = require(global + 'cli-table');

let users = [];
let table = new Table({
  head: ['username', '♥', 'Solved', 'Points'],
  colWidths: [15, 5, 10, 10]
});

const options = {
  url: 'https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received',
  json: true
};

rp(options)
  .then((data) => {
    // let promises = [];
    let userData = [];
    for (let user of data.directory_items) {
      userData.push({ name: user.user.username, likes_received: user.likes_received});
    }
    process.stdout.write('loading');
    getChallengesCompletedAndPushToUserArray(userData);
  })
  .catch((err) => {
    console.log(err);
  });

  function getChallengesCompletedAndPushToUserArray(userData) {
    var i = 0;
    //var challengesPoints = 'unknown';
    // https://api.freecodecamp.org/api/users/get-public-profile?username=arielleslie
    function next() {
      if (i < userData.length) {
        /* Doesn't Work
        var options = {
          url: `https://www.freecodecamp.org/${userData[i].name}`,
          transform: body => cheerio.load(body)
        }
        rp(options)
          .then(function ($) {
            process.stdout.write(`.`);
            const fccAccount = $('h1.landing-heading').length == 0;
            const challengesPassed = fccAccount ? $('tbody tr').length: 'unknown';
            challengesPassed = '';
            table.push([userData[i].name, userData[i].likes_received, challengesPassed]);
            ++i;
            return next();
          })
          */
          var points = {
            url: `https://api.freecodecamp.org/api/users/get-public-profile?username=${userData[i].name.toLowerCase()}`,
            json: true
          }
          rp(points)
            .then((data) => {
              /*
              process.stdout.write(`.`);
              challengesPassed = data.entities ? (data.entities.user[userData[i].name.toLowerCase()].points > 0 ? data.entities.user[userData[i].name.toLowerCase()].points: 'unknown'): 'unknown';
              table.push([userData[i].name, userData[i].likes_received, challengesPassed]);
              ++i;
              return next();
              */
              const challengesPoints = data.entities ? (data.entities.user[userData[i].name.toLowerCase()].points > 0 ? data.entities.user[userData[i].name.toLowerCase()].points: 'unknown'): 'unknown';
              var options = {
                url: `https://forum.freecodecamp.org/user_actions.json?offset=0&username=${userData[i].name.toLowerCase()}&filter=15`,
                json: true
              }
              rp(options)
                .then((data) => {
                  process.stdout.write(`.`);
                  const fccAccount = data.user_actions.length > 0;
                  const challengesPassed = fccAccount ? data.user_actions.length: 'unknown';
                  table.push([userData[i].name, userData[i].likes_received, challengesPassed, challengesPoints]);
                  ++i;
                  return next();
                })
              })
          /*
          var options = {
            url: `https://forum.freecodecamp.org/user_actions.json?offset=0&username=${userData[i].name.toLowerCase()}&filter=15`,
            json: true
          }
          rp(options)
            .then((data) => {
              process.stdout.write(`.`);
              const fccAccount = data.user_actions.length > 0;
              const challengesPassed = fccAccount ? data.user_actions.length: 'unknown';
              table.push([userData[i].name, userData[i].likes_received, challengesPassed, challengesPoints]);
              ++i;
              return next();
            })
          */
          } else {
        printData();
      }
    }
    return next();
  };

  function printData() {
    console.log('.');
    console.log(table.toString());
   }