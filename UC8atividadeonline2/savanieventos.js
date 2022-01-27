// Eventos Savani

// Data do Evento:
// Inválido? : escrever na tela "Evento já realizado"
// Válido? Perguntar: "Qual a sua idade?" Idade do participante >= 18 inscrever
//     lista de inscritos < 10: adiciona uma inscrição: escrever na tela: "Inscrição confirmada"
//         Lista de inscritos > 10: escrever na tela "Cadastro não permitido por exceder o limite de vagas"
//     Idade < 18 : escrever na tela "Cadastro exclusivo para maiores de 18 anos"

// EventoCriado: convidar palestrante(s)
    // Escrever na tela: Lista de Palestrantes e Lista de Participantes inscritos


    let dataEvento = new Date('02/10/2022')
    let dataHoje = new Date()
    let idadeInscrito = 18
    let listaDeInscritos
    let vagas = 10
    console.log(dataEvento)

    if(dataEvento <= dataHoje) {
        console.log("Evento já realizado")
        return
    }
    
    console.log("Qual a sua idade")

    if(idadeInscrito < 18) {
        console.log("Cadastro exclusivo para maiores de 18 anos")
        return
    }

     if(vagas > 10) {
        console.log("Cadastro não permitido por exceder o limite de vagas")
        return
    } 

    entradaDeInscritos = ["Danio", "Patrik", "Marcelo", "Alan", "Lígia"]    
    listaDeInscritos = []

    for(let contador = 0; contador < entradaDeInscritos.length; contador++) {
        if(listaDeInscritos.length < vagas) {
            listaDeInscritos.push(entradaDeInscritos[contador])
        }
    }
    console.log(listaDeInscritos)

    entradaDePalestrantes = ["Maria", "Adroaldo"]
    let listaPalestrantes = []
  
    for(contador = 0; contador < entradaDePalestrantes.length; contador++) {
        listaPalestrantes.push(entradaDePalestrantes[contador])
    }
    
    console.log(listaPalestrantes)



    