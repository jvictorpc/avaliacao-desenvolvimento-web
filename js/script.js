const btnSearch = document.querySelector('.btn-search');

const indicaFilme = (event) => {
    
    event.preventDefault();

    const nome = document.querySelector('.input-name').value;
    const idade = document.querySelector('.input-age').value;

    if (!nome == '' && !idade == '') {
        const container = document.querySelector('.container');
        const valueRadio = document.querySelector('input[type="radio"]:checked').value;
        const generoFilme = document.querySelector(`label[for="${valueRadio}"]`).textContent;
        
        //pra montar o container com os filmes eu preciso saber o genero do filme, o nome e a idade do usuario

        container.innerHTML = '';
        container.innerHTML = montaContainer(valueRadio,idade, nome, generoFilme);

        mostraInfo(0, 1);
        mostraInfo(1, 0);
    }else{
        window.alert('preenche os campos, mizera.');
    }  
}


btnSearch.addEventListener('click', indicaFilme);