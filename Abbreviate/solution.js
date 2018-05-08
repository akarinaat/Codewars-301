'use strict';

function abbrevName(name){
  let firstName = name.split(' ');
  return `${firstName[0].charAt(0).toUpperCase()}.${firstName[1].charAt(0).toUpperCase()}`;

}

abbrevName();