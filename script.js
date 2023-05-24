"use strict";



let userName = prompt('Введите логин','');

  if (userName === 'админ') {
    let pass = prompt ('введите пароль','')
      if (pass === 'я главный') {
        alert ('здравствуйте');
      } else if (pass === '' || pass === null) {
        alert ('отменено');
      } else {
        alert ('не верный пароль');
      }
    } else if (userName === '' || userName === null){
      alert ('отменено');
    } else {
      alert ('я вас не знаю');
    }