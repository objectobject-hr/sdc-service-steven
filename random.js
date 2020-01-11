'use strict';

const randomNum = (userContext, event, done) => {
    const id = Math.floor(Math.random() * 1e7);
    userContext.vars.id = id;
    return done();
  };

module.exports = {
  randomNum
};