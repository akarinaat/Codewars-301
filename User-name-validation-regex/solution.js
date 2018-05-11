'use strict';

function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/gm.test(username);
  return res;
}

validateUsr();