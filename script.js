// script.js

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })

  document.addEventListener('click', function (event) {
    const navbar = document.getElementById('navbarMarcele');
    const isClickInside = navbar.contains(event.target);
    const isToggler = event.target.closest('.navbar-toggler');

    if (!isClickInside && !isToggler && navbar.classList.contains('show')) {
      const collapse = bootstrap.Collapse.getInstance(navbar);
      collapse.hide();
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita o envio imediato
  
      const data = new FormData(form);
  
      fetch(form.action, {
        method: "POST",
        body: data,
      })
      .then(() => {
        form.reset(); // Limpa o formulário
        document.getElementById("modalSucesso").style.display = "flex";
      })
      .catch(() => {
        alert("Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.");
      });
    });
  });
  //
  function fecharModal() {
    document.getElementById("modalSucesso").style.display = "none";
  }
  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
  }

  window.onload = function () {
    if (localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookie-banner').style.display = 'none';
    }
  };//
   // Mostrar o aviso se ainda não foi aceito
   window.addEventListener("load", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
      document.getElementById("cookieConsent").classList.remove("d-none");
    }
  });

  // Ao aceitar, guardar escolha e ocultar aviso
  document.getElementById("acceptCookies").addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieConsent").classList.add("d-none");
  });

 
