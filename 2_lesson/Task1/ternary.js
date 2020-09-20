
function getMessage(login) {

    let message = (login == 'Emplyee') ? 'Hi' :
    (login == 'Mr President') ? 'Good evening' :
    (login == '') ? 'User is not authorized' :
    '';
    return message;
    
  }
  console.log(getMessage("Mr President"));