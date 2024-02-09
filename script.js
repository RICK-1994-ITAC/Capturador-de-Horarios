function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
     msg.innerHTML = `Agora são ${hora} horas.`
        if(hora >=0 && hora <=12) {
            //Bom Dia
            img.src='fotomanha.jpg'
            document.body.style.background ='rgb(243 223 196)'
         }else if (hora<=18) {
            img.src='fototarde.jpg'
            document.body.style.background='rgb(74 61 71)'
         }else {
            img.src='fotonoite.jpg'
            document.body.style.background ='rgb(2 57 87)'
         }

}           
   
