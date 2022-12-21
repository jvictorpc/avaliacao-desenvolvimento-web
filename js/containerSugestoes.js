const backgroundBody = document.querySelector('body').style;
//classe construtora do objeto filme
class Filme {
    constructor(path, nome, classificacao, sinopse) {
        this.path = path;
        this.nome = nome;
        this.classificacao = classificacao;
        this.sinopse = sinopse;
    }
}

// array com a lista de filmes de cada genero 
const terrorTrash = [
    new Filme('./img/rubber.jpg', 'rubber (2016)', 16, 'No deserto, um pneu assassino usa poderes telepáticos para matar animais e fazer cabeças de humanos explodirem e sente-se estranhamente atraído por uma jovem.'),

    new Filme('./img/toxicavenger.jpg', 'toxicavenger (1984)', 16, 'O jovem Melvin Junko é um faxineiro atrapalhado que é constantemente desprezado e humilhado pelos frequentadores de uma academia de ginástica da cidade de Tromaville, até o dia em que cai em um tanque de lixo químico e torna-se o Vingador Tóxico. A partir daí, ele começa a perseguir gangues e bandidos da cidade.')
];
const bodyHorror = [
    new Filme('./img/thefly.jpg', 'the fly (1986)', 14, 'O excêntrico cientista Seth Brundle completa seu dispositivo de teletransporte e decide testar a eficácia do experimento em si próprio. Sem que ele perceba, uma mosca cai no aparelho durante o processo e provoca uma fusão dele com o inseto. Contudo, ele pensa que o experimento foi um sucesso, até que começa a notar que as células da mosca estão tomando conta de seu corpo, e ele acaba se transformando em uma criatura monstruosa.'),

    new Filme('./img/thething.jpg', 'the thing (1982)', 16, 'Na remota Antártida, um grupo de cientistas americanos é perturbado em sua base quando, de um helicóptero, alguém atira em um cão do acampamento. À medida que socorrem o cão baleado, o bicho começa a atacar os cientistas e os outros cachorros e logo eles descobrem que o animal pode assumir a forma de suas vítimas. Isto significa que membros da equipe podem ser mortos e a cópia assumir o lugar deles. Com isso, um piloto e um médico precisam capturar a fera antes que seja tarde demais.')
];

const terrorJapones = [
    new Filme('./img/onibaba.jpg', 'Onibaba: A mulher Demônio (1964)', 16, 'Japão, século XIV. Enquanto Kichi está na guerra, sua mãe (Nobuko Otowa) e sua esposa (Jitsuko Yoshimura) sobrevivem matando guerreiros desorientados e vendendo seus pertences. Quando a nora se encanta com um desertor, a sogra assume uma assustadora identidade para evitar sua partida.'),

    new Filme('./img/hausu.jpg', 'Hausu (1977)', 16, 'Na trama, Gorgeous (Kimiko Ikegami) é uma jovem estudante que não conseguindo aceitar a nova namorada do pai, resolve não viajar com ele nas férias, indo ao invés disso para a casa de sua tia (Yôko Minamida), que não vê há anos. Na companhia das amigas Fantasy (Kumiko ôba), Kung Fu (Miki Jinbo), Professora (Ai Matsubara), Melody (Eriko Tanaka), Sweet (Masayo Miyako) e Mac (Mieko Satô), Gorgeous vai para a casa da tia, mas logo após a chegada das meninas, coisas bizarras começam a acontecer. Uma força misteriosa na casa, que parece intimamente ligada ao gato da tia, começa a perseguir as garotas uma a uma, e agora elas devem lutar para sair da casa se quiserem sobreviver.')
];

const thriller = [
    new Filme('./img/perfectblue.jpg', 'perfect blue (1997)', 16, 'Mima Kirigoe é uma cantora pop de uma banda CHAM!, mas decide se tornar uma atriz, tendo como primeiro projeto uma série de crime dramática. Muitos de seus fãs ficam chateados com sua decisão e uns deles, obcecado por Mima, começa a perseguí-la e a enviar mensagens a chamando de traidora.'),

    new Filme('./img/theshining.jpg', 'the shining (1980)', 16, 'Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família.')
];

const revenge = [
    new Filme('./img/killbill.jpg', 'Kill bill (2003)', 16, 'A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos de sua vida. Na jornada, a Noiva é submetida a dores físicas agonizantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.'),

    new Filme('./img/ladyvengeance.jpg', 'Lady vengeance (2005)', 16, 'Lee Geum-ja passou os últimos 13 anos presa por um crime que não cometeu. Ao ser libertada, reúne ex-companheiros de cela e dá início ao meticuloso plano de vingança que arquitetou durante o tempo na prisão.')
];

function avaliaIdade(idade, classificacao) {
    if (idade < classificacao) {
        return `Este filme não é indicado para sua faixa otária.`
    }

    return `Este filme é ideal para sua faixa etária.`
}

const montaHtml = (genero, idade, nome, generoFilmeTexto) => {
    return `
        <div class="container-sugestoes">
            <p class="texto-indicacao">Olá, ${nome} temos estas indicações de filme para você!<br>Categoria: ${generoFilmeTexto}</p>
            <div class="filmes">
                <figure class="poster">
                    <img src="${genero[0].path}" alt="imagem do poster">
                    <figcaption>${genero[0].nome}</figcaption>
                </figure>
                <figure class="poster">
                    <img src="${genero[1].path}" alt="imagem do poster">
                    <figcaption>${genero[1].nome}</figcaption>
                </figure>
            </div>
            <div class="info-container">
                <p class="info-sinopse">${genero[0].sinopse}</p>
                <p class= "info-classificacao">Classificação ${genero[0].classificacao}</p>
                <p class="info-idade">${avaliaIdade(idade, genero[0].classificacao)}</p>
                <a class="volta"  href="./index.html">Consulte outra opção</a>
            </div>
            <div class="info-container">
                <p class="info-sinopse">${genero[1].sinopse}</p>
                <p class= "info-classificacao">Classificação ${genero[1].classificacao}</p>
                <p class="info-idade">${avaliaIdade(idade, genero[1].classificacao)}</p>
                <a class="volta"  href="./index.html">Consulte outra opção</a>
                </div>
        </div>
    `
}

const montaContainer = (genero, idade, nome, generoFilmeTexto) => {

    switch (genero) {
        case 'terrorTrash':
            backgroundBody.background='linear-gradient(45deg, rgba(39,39,39,.7), rgba(29,29,29,.8)), url(./img/wallpaper-genero/terrortrash.jpg) center no-repeat ';
            return montaHtml(terrorTrash, idade, nome, generoFilmeTexto);

        case 'bodyHorror':
            backgroundBody.background ='linear-gradient(45deg, rgba(39,39,39,.7), rgba(29,29,29,.8)), url(./img/wallpaper-genero/bodyhorror.jpg) center no-repeat ';
            return montaHtml(bodyHorror, idade, nome, generoFilmeTexto);

        case 'terrorJapones':
            backgroundBody.background ='linear-gradient(45deg, rgba(39,39,39,.7), rgba(29,29,29,.8)), url(./img/wallpaper-genero/terrorjapones.jpg) center no-repeat ';
            return montaHtml(terrorJapones, idade, nome, generoFilmeTexto);

        case 'thriller':
            backgroundBody.background ='linear-gradient(45deg, rgba(39,39,39,.7), rgba(29,29,29,.8)), url(./img/wallpaper-genero/terrorpsicologico.jpg) center no-repeat ';
            return montaHtml(thriller, idade, nome, generoFilmeTexto);

        case 'revenge':
            backgroundBody.background ='linear-gradient(45deg, rgba(39,39,39,.7), rgba(29,29,29,.8)), url(./img/wallpaper-genero/vinganca.jpg) center no-repeat ';
            return montaHtml(revenge, idade, nome, generoFilmeTexto);

    }
}

//mostra as informações do filme: sinopse, classificação etc
//fica trocando a classe active entre as opções de filme para que apareça cada uma por vez
function mostraInfo(indiceAlvo, outroIndice) {
    const posters = document.querySelectorAll('.poster')
    const info = document.querySelectorAll('.info-container');
    const posterimg = document.querySelectorAll('.poster img');

    //o alvo do clique é o elemento com a classe poster que engloba a img e o titulo do filme
    posters[indiceAlvo].addEventListener('click', () => {

        if (info[outroIndice].classList.contains('active')) {

            info[outroIndice].classList.remove('active');
            info[indiceAlvo].classList.add("active");
            posterimg[outroIndice].classList.remove('seleciona');
            posterimg[indiceAlvo].classList.add('seleciona');
        } else {

            info[indiceAlvo].classList.toggle("active");
            posterimg[indiceAlvo].classList.toggle('seleciona');
        }

    })
}
