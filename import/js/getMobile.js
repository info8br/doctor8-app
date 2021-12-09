function getMobile(){

  if (window.innerWidth <= 480) {

    document.body.setAttribute('mobile', '1');

  } else {

    document.body.setAttribute('mobile', '0');

  }

}