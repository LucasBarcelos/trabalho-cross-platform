function enviar() {
    console.log(document.querySelector('.nome').value);
    console.log(document.querySelector('.assunto').value);
    console.log(document.querySelector('.email').value);
    console.log(document.querySelector('.message').value);

    const name = document.querySelector('.nome').value;
    const assunto = document.querySelector('.assunto').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;

    const msg = {
        from: "lucasbarcelos@assessoria.app",
        to: "lucastbarcelos@gmail.com",
        subject: assunto,
        text: `
        Nome: ${name}
        Email: ${email}

        Mensagem: ${message}`
    };
    console.log(`msg`,msg);

    fetch('https://fiap-sender.herokuapp.com/email/send',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg),
    }
    )
    .then(data => {
        console.log(data);
        alert('Email enviado com sucesso!');
    }).catch(err => {
        console.error(err);
        alert('Tente enviar novamente!');
    })
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    document.getElementById(pageName).style.display = "block";
  
    elmnt.style.backgroundColor = color;
}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  
document.getElementById("defaultOpen").click();