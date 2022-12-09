function contact(){

window.open("https://api.whatsapp.com/send?phone=5531971720053&text=Olá, tenho interesse em receber atualizações do Doctor8.","_blank")

}

function getMobile() {

  if (window.innerWidth <= 480) {

    document.body.setAttribute('mobile', '1');

  } else {

    document.body.setAttribute('mobile', '0');

  }

}



