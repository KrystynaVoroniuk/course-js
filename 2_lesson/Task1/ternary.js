
function getMessage(login) {

    let message = login == 'Empolyee' ? 'Hi' :
    login == 'Mr President' ? 'Good evening' :
    login == '' ? 'User is not authorized' :
    '';
    return message;
    
  }
  console.log(getMessage("Mr President"));