document.addEventListener('DOMContentLoaded', () => {


    function toggleDarkMode() {

        // Obter o estado do botão darkmode
        const mudar = document.getElementById("modo");
        const mudar2 = document.getElementById('modo2');
        const mododark = document.getElementById("mododark");
        const mododark2 = document.getElementById("mododark2");
        const nav = document.getElementById("nav");
        const li = document.querySelectorAll(".li");
        const h1 = document.getElementById("h1");
        const p = document.getElementById("texto");
        const nome = document.querySelectorAll(".nome");
        const button = document.querySelectorAll(".button");
        const line = document.querySelectorAll(".line");
        const button2 = document.querySelectorAll(".button2");
        const line2 = document.querySelectorAll(".line2");
        const imagem = document.getElementById("imagem");
        const image = document.getElementById("image");
        const circulo = document.querySelectorAll(".circulo");
        const imagememail = document.getElementById("email");
        const imagememail2 = document.getElementById("email2");
        const imageminsta = document.getElementById("insta");
        const imageminsta2 = document.getElementById("insta2");
        const imagemlinkedin = document.getElementById("linkedin");
        const imagemlinkedin2 = document.getElementById("linkedin2");
        const imagemgithub = document.getElementById("github");
        const imagemgithub2 = document.getElementById("github2");
        const html = document.getElementById("html");
        const css = document.getElementById("css");
        const js = document.getElementById("js");
        const java = document.getElementById("java");
        const php = document.getElementById("php");
        const ionic = document.getElementById("ionic");
        const mysql = document.getElementById("mysql");
        const laravel = document.getElementById("laravel");
        const studio = document.getElementById("studio");
        const photoshop = document.getElementById("photoshop");
        const corel = document.getElementById("corel");
        const figma = document.getElementById("figma");
        const textohabilidade = document.getElementById("textohabilidade");
        const borda = document.querySelectorAll(".borda");
        const textoprojeto = document.getElementById("textoprojeto");
        const cards = document.querySelectorAll(".cards");
        const curriculo = document.querySelectorAll(".curriculo");
        const linhafooter = document.getElementById("linhafooter");
        const logofatec = document.getElementById("logofatec");
        const copyright = document.querySelectorAll(".copyright");
        const contato = document.getElementById("contatotexto");
        const menu = document.getElementById("menu");
        const hamburguercolor = document.querySelectorAll(".hamburguercolor");
        const legenda = document.querySelectorAll(".legenda");
        const captionbox = document.querySelectorAll(".caption-box");
        const captiontitle = document.querySelectorAll(".caption-title");
        const captionsubt = document.querySelectorAll(".caption-subtitle");


        if (mudar.checked || mudar2.checked) {
            // Se o botão está marcado, definir o plano de fundo para preto
            document.body.style.backgroundColor = "#1a1b1c";
            // trocar cor h1
            h1.style.color = "white";
            // trocar cor p
            p.style.color = "white";
            // box shadow da imagem 
            imagem.style.boxShadow = "0 0 50px white";
            //intera sobre os elementos da classe li alterando a cor
            li.forEach((element) => {
                element.style.color = "white";
            });
            //trocar cor do botão da pagina principal
            button.forEach((corbutton) => {
                corbutton.style.color = "white";
                corbutton.style.border = "1px solid #888";
            });
            //trocar com da linha do botão
            line.forEach((corlinha) => {
                corlinha.style.backgroundColor = "#888";
            });
            //trocar com da linha do botão
            line2.forEach((corlinha2) => {
                corlinha2.style.backgroundColor = "#888";
            });
            //trocar cor do botão da pagina principal
            button2.forEach((corbutton2) => {
                corbutton2.style.color = "white";
                corbutton2.style.border = "1px solid #888";
            });
            // trocar cor do circulo da rede social
            circulo.forEach((corcirculo) => {
                corcirculo.style.border = "2px solid white";
            });
            // trocar cor da borda das habilidades
            borda.forEach((corborda) => {
                corborda.style.border = "1px solid white";
            });
            // troca cor das palavras 
            nome.forEach((cornome) => {
                cornome.style.color = "white";
            });
            //trocar cor borda dos cards
            cards.forEach((corborda) => {
                corborda.style.border = "1px solid #888";
            });
            //trocar nome do texto habilidade
            textohabilidade.style.color = "white";
            //trocar nome do texto projetos
            textoprojeto.style.color = "white";
            //trocar cor da nav
            nav.style.backgroundColor = "#1a1b1c";
            //trocar cor da linha
            linhafooter.style.backgroundColor = "white";
            //trocar cor da logofatec
            logofatec.style.filter = "none";
            // trocar cor do contato
            contato.style.color = "white";
            // trocar cor da tela do menu
            menu.style.backgroundColor = "#1a1b1c";
            // trocar cor copyright
            copyright.forEach((corcopyright) => {
                corcopyright.style.color = "white";
            });
            //trocar cores do botão curriculo
            curriculo.forEach((corcurriculo) => {
                corcurriculo.style.color = "white";
                corcurriculo.style.border = "0.1rem solid white";
            });
            //trocar cores do hamburguer
            hamburguercolor.forEach((corhamburguer) => {
                corhamburguer.style.backgroundColor = "white";
            });
            //trocar cores da legenda
            legenda.forEach((legenda) => {
                legenda.style.color = "white";
            });
            //trocar cores caption
            captionbox.forEach((cap) => {
                cap.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.39)";
            });
            //trocar cores caption titulo
            captiontitle.forEach((cap) => {
                cap.style.color = "white";
            });
            // trocar cores caption subtitulo
            captionsubt.forEach((cap) => {
                cap.style.color = "white";
            });


            // trocar fotos imagens
            mododark.src = "img/sol.png";
            mododark2.src = "img/sol.png";
            imageminsta.src = "img/ícones/rede social/insta white.png";
            imagememail.src = "img/ícones/rede social/email white.png";
            imagemlinkedin.src = "img/ícones/rede social/linkedin white.png";
            imagemgithub.src = "img/ícones/rede social/github white.png";
            imageminsta2.src = "img/ícones/rede social/insta white.png";
            imagememail2.src = "img/ícones/rede social/email white.png";
            imagemlinkedin2.src = "img/ícones/rede social/linkedin white.png";
            imagemgithub2.src = "img/ícones/rede social/github white.png";
            html.src = "img/ícones/linguagens/html white.png";
            css.src = "img/ícones/linguagens/css white.png";
            js.src = "img/ícones/linguagens/js white.png";
            java.src = "img/ícones/linguagens/java white.png";
            php.src = "img/ícones/linguagens/php white.png";
            ionic.src = "img/ícones/linguagens/ionic white.png";
            mysql.src = "img/ícones/linguagens/mysql white.png";
            laravel.src = "img/ícones/linguagens/laravel white.png";
            studio.src = "img/ícones/linguagens/android studio white.png";
            photoshop.src = "img/ícones/linguagens/photoshop white.png";
            corel.src = "img/ícones/linguagens/corel white.png";
            figma.src = "img/ícones/linguagens/figma white.png";

            image.style.opacity = 0;
            setTimeout(() => {
                image.src = "img/Fotos Pessoal/Eu oficial.png";
                image.style.opacity = 1;
                image.style.transform = 'scale(1)';
            }, 500);// 500 são 0.5 s

        } else {
            // Se o botão não está marcado, definir o plano de fundo para branco
            document.body.style.backgroundColor = "rgb(231, 231, 231)";
            // trocar cor h1
            h1.style.color = "black";
            // trocar cor p
            p.style.color = "black";
            // box shadow da imagem 
            imagem.style.boxShadow = "0 0 50px black";
            //intera sobre os elementos da classe li alterando a cor
            li.forEach((element) => {
                element.style.color = "black";
            });
            //trocar cor do botão da pagina principal
            button.forEach((corbutton) => {
                corbutton.style.color = "black";
                corbutton.style.border = "1px solid #888";
            });
            //trocar cor do botão da pagina principal
            button2.forEach((corbutton2) => {
                corbutton2.style.color = "black";
                corbutton2.style.border = "1px solid #888";
            });
            //trocar com da linha do botão
            line.forEach((corlinha) => {
                corlinha.style.backgroundColor = "#888";
            });
            //trocar com da linha do botão
            line2.forEach((corlinha2) => {
                corlinha2.style.backgroundColor = "#888";
            });
            // trocar cor do circulo da rede social
            circulo.forEach((corcirculo) => {
                corcirculo.style.border = "2px solid black";
            });
            // trocar cor da borda das habilidades
            borda.forEach((corborda) => {
                corborda.style.border = "1px solid black";
            });
            // troca cor das palavras 
            nome.forEach((cornome) => {
                cornome.style.color = "black";
            });
            //trocar cor borda dos cards
            cards.forEach((corborda) => {
                corborda.style.border = "1px solid black";
            });
            //trocar nome do texto habilidade
            textohabilidade.style.color = "black";
            //trocar nome do texto projetos
            textoprojeto.style.color = "black";
            //trocar cor da nav
            nav.style.backgroundColor = "rgb(231, 231, 231)";
            //trocar cor da linha
            linhafooter.style.backgroundColor = "black";
            // modo claro: imagem branca
            logofatec.style.filter = "invert(1)";
            // trocar cor do contato
            contato.style.color = "black";
            // trocar cor da tela do menu
            menu.style.backgroundColor = "rgb(231, 231, 231)";
            // trocar cor copyright
            copyright.forEach((corcopyright) => {
                corcopyright.style.color = "black";
            });
            //trocar cores do botão curriculo
            curriculo.forEach((corcurriculo) => {
                corcurriculo.style.color = "black";
                corcurriculo.style.border = "0.1rem solid #888";
            });
            //trocar cores do hamburguer
            hamburguercolor.forEach((corhamburguer) => {
                corhamburguer.style.backgroundColor = "black";
            });
            //trocar cores da legenda
            legenda.forEach((legenda) => {
                legenda.style.color = "black";
            });
            //trocar cores caption
            captionbox.forEach((cap) => {
                cap.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.4)";
            });
            //trocar cores caption titulo
            captiontitle.forEach((cap) => {
                cap.style.color = "black";
            });
            // trocar cores caption subtitulo
            captionsubt.forEach((cap) => {
                cap.style.color = "black";
            });



            // trocar fotos imagens
            mododark.src = "img/Lua.png"
            mododark2.src = "img/Lua.png"
            imageminsta.src = "img/ícones/rede social/instagram fundo transparente.png";
            imagememail.src = "img/ícones/rede social/email fundo transparente.png";
            imagemlinkedin.src = "img/ícones/rede social/Linkedin fundo transparente.png";
            imagemgithub.src = "img/ícones/rede social/github fundo transparente.png";
            imageminsta2.src = "img/ícones/rede social/instagram fundo transparente.png";
            imagememail2.src = "img/ícones/rede social/email fundo transparente.png";
            imagemlinkedin2.src = "img/ícones/rede social/Linkedin fundo transparente.png";
            imagemgithub2.src = "img/ícones/rede social/github fundo transparente.png";
            html.src = "img/ícones/linguagens/html dark.png";
            css.src = "img/ícones/linguagens/css dark.png";
            js.src = "img/ícones/linguagens/js dark.png";
            java.src = "img/ícones/linguagens/java dark.png";
            php.src = "img/ícones/linguagens/php dark.png";
            ionic.src = "img/ícones/linguagens/ionic dark.png";
            mysql.src = "img/ícones/linguagens/mysql dark.png";
            laravel.src = "img/ícones/linguagens/laravel dark.png";
            studio.src = "img/ícones/linguagens/android studio dark.png";
            photoshop.src = "img/ícones/linguagens/photoshop dark.png";
            corel.src = "img/ícones/linguagens/corel dark.png";
            figma.src = "img/ícones/linguagens/figma dark.png";


            image.style.opacity = 0;
            setTimeout(() => {
                image.src = "img/Fotos Pessoal/Eu oficial.png";
                image.style.opacity = 1;
                image.style.transform = 'scale(1)';
            }, 500);// 500 são 0.5 s

        }
    }

    //Qualquer um dos botões será ativado
    document.getElementById("modo").addEventListener("click", toggleDarkMode);
    document.getElementById("modo2").addEventListener("click", toggleDarkMode);


});
