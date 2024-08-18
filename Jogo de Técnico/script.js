var vida = 50
var empatia = 0
var coragem = 0
var resiliencia = 0

var checkpointVida = vida
var checkpointEmpatia = empatia
var checkpointCoragem = coragem
var checkpointResiliencia = resiliencia

var voltarDe = null

var inventario = ["3x Moedas"]

function mostrarStatus() {
  console.clear()
  console.log("Vida: " + vida)
  console.log("Empatia: " + empatia)
  console.log("Coragem: " + coragem)
  console.log("Resiliência: " + resiliencia)
}

function iniciarJogo() {
  console.clear()
  console.log("=== Ashes of the Fallen ===")
  console.log("Em um mundo devastado por guerras e conflitos, onde as cinzas do passado obscurecem o horizonte, Kasra, um guerreiro errante cuja terra natal, Ãri, foi destruída, que uma vez foi um renomado campeão de sua terra natal, agora é um refugiado, buscando não apenas um novo lar, mas também uma maneira de curar as cicatrizes que carrega e alcançar seu destino final: as lendárias Olimpíadas de 2024.")
  console.log("\nVocê, Kasra, acorda em uma terra desolada...")     
  menu()
}

function menu() {
  console.log("1 - Explorar a terra")
  console.log("2 - Ver status")
  console.log("3 - Abrir inventário")
  console.log("4 - Sair do jogo")
  let escolha = prompt("Escolha 1, 2, 3 ou 4: ")

  if (escolha == 1) {
    console.clear()
    primeiraEscolha()
  }
  else if (escolha == 2) {
    console.clear()
    mostrarStatus()
    menu()
  }
  else if (escolha == 3) {
    console.clear()
    if(inventario.length == 0){
    console.log("Inventário vazio")
      menu()
    }
      
    else{
      console.log("Itens no inventário:")
      console.log(inventario)
      menu()
    }
  }
  else if (escolha == 4) {
    console.log("Fim de jogo.")
  }
  else {
    console.log("Escolha inválida. Tente novamente.")
    menu()
  }
}

function menu2() {
  console.log("1 - Continuar a explorar a terra")
  console.log("2 - Ver status")
  console.log("3 - Abrir inventário")
  console.log("4 - Sair do jogo")
  let escolha = prompt("Escolha 1, 2, 3 ou 4: ")

  if (escolha == 1) {
    continuacaoDaJornada()
  }
  else if (escolha == 2) {
    console.clear()
    mostrarStatus()
    menu2()
  }
  else if (escolha == 3) {
    console.clear()
    if(inventario.length == 0){
    console.log("Inventário vazio")
      menu2()
    }
    else{
      console.log("Itens no inventário:")
      console.log(inventario)
      menu2()
    }
    
  }
  else if (escolha == 4) {
    console.log("Fim de jogo.")
  }
  else {
    console.log("Escolha inválida")
    menu2()
  }
}

function menu3() {
  console.log("1 - Continuar a explorar a terra")
  console.log("2 - Ver status")
  console.log("3 - Abrir inventário")
  console.log("4 - Sair do jogo")
  let escolha = prompt("Escolha 1, 2, 3 ou 4: ")

  if (escolha == 1) {
    continuacaoDaJornada2()
  }
  else if (escolha == 2) {
    console.clear()
    mostrarStatus()
    menu3()
  }
  else if (escolha == 3) {
    console.clear()
    if(inventario.length == 0){
    console.log("Inventário vazio")
      menu3()
    }
    else{
      console.log("Itens no inventário:")
      console.log(inventario)
      menu3()
    }

  }
  else if (escolha == 4) {
    console.log("Fim de jogo.")
  }
  else {
    console.log("Escolha inválida")
    menu3()
  }
}

function salvarCheckpoint() {
  checkpointVida = vida
  checkpointEmpatia = empatia
  checkpointCoragem = coragem
  checkpointResiliencia = resiliencia
  console.log("Checkpoint salvo.")
}

function restaurarCheckpoint() {
  vida = checkpointVida
  empatia = checkpointEmpatia
  coragem = checkpointCoragem
  resiliencia = checkpointResiliencia
  console.log("Progresso restaurado.")
  voltarDe()
}

function primeiraEscolha() {
  console.log("\nVocê segue seu caminho, após uma longa caminhada, você se depara com um caminho bifurcado...")
  console.log("1. Entrar na floresta")
  console.log("2. Seguir para a aldeia")

  let escolha = prompt("Escolha 1 ou 2: ")

  if (escolha == 1) {
    entrarNaFloresta()
  } else if (escolha == 2) {
    entrarNaAldeia()
  } else {
    console.log("Escolha inválida. Tente novamente.")
    primeiraEscolha()
  }
}

function entrarNaFloresta() {
  console.clear()
  console.log("\nVocê entra na floresta.\n")
  console.log("A floresta é densa e misteriosa, envolta em escuridão profunda, onde a luz da lua mal consegue penetrar através das copas das árvores entrelaçadas.")
  console.log("Ao longe, você ouve um rugido estranho, como se algo estivesse se aproximando.")
  console.log("Você está cheio de medo, tem a certeza de que o quer que seja esse barulho, não irá te deixar fugir.")
  enfrentarMonstroIncerteza()
}

function enfrentarMonstroIncerteza(){
  console.log("\nVocê está cercado pela Névoa da Confusão. Você se sente tomado pela dúvida sobre suas escolhas.")
  console.log("\nVocê está frente a frente com o monstro que encarna a incerteza.")
  console.log("▄▄▀█▄───▄───────▄\n▀▀▀██──███─────███\n░▄██▀░█████░░░█████░░\n███▀▄███░███░███░███░▄\n▀█████▀░░░▀███▀░░░▀██▀")

    console.log("\nO que você vai fazer?")
    console.log("1. Confrontar a Incerteza com Coragem")
    console.log("2. Buscar Clareza")
    console.log("3. Ceder à Dúvida e Fugir")

    let escolha = prompt("Escolha 1, 2 ou 3:")

    if (escolha == "1") {
        console.clear()
        console.log("\nVocê enfrenta a incerteza de frente e a névoa começa a se dissipar.")
        console.log("Sua coragem te guia pelo caminho certo.")
        coragem += 2
        salvarCheckpoint()
        continuarJornada()
      }
    else if (escolha == "2") {
        console.clear()
        console.log("\nVocê foca sua mente e busca clareza interior.")
        console.log("A Névoa da Confusão se dispersa, e você pode ver o caminho novamente.");
        resiliencia += 2
        salvarCheckpoint()
        continuarJornada()
      }
    else if (escolha == "3") {
      console.clear();
      console.log("\nVocê cede à dúvida e tenta fugir, mas a Névoa da Confusão te persegue...")
      console.log("Você consegue escapar, quase inteiro.")
      if(coragem > 0){
      coragem -= 1
      }
      if(resiliencia > 0){
      resiliencia -= 1
      }
      vida -= 15
      salvarCheckpoint()
      continuarJornada()
    } else {
      console.log("Escolha inválida. Tente novamente.")
      enfrentarMonstroIncerteza()
    }
  }


function entrarNaAldeia() {
  console.clear()
  console.log("\nVocê entra na aldeia.\n")
  console.log("A aldeia, esquecida pelo tempo, repousa em um vale isolado, envolta por colinas cobertas de vegetação selvagem.")
  avancarAldeia()
}

function avancarAldeia() {
  console.clear()
  console.log("No centro da aldeia, há uma praça com uma estátua quebrada de um guerreiro. Você sente uma presença estranha.")
  console.log("Dela emerge uma criatura de aparência pesada e opressora. Seus olhos são vazios e sua presença faz com que você sinta uma onda de cansaço e desânimo.")
  enfrentarMonstroDesmotivacao()
}

function enfrentarMonstroDesmotivacao() {
  console.log("─────▄████▀█▄\n───▄█████████████████▄\n─▄█████.▼.▼.▼.▼.▼.▼▼▼▼   <--------- criatura \n▄███████▄.▲.▲▲▲▲▲▲▲▲\n████████████████████▀▀")

  console.log("\nVocê está frente a frente com o monstro que encarna a desmotivação.")
  console.log("O monstro sussurra em sua mente, tentando convencê-lo de que todos os seus esforços são em vão.")

  console.log("\nVocê tem três opções:")
  console.log("1. Lutar contra o monstro usando sua própria coragem.")
  console.log("2. Usar a própria desmotivação da criatura contra ela.")
  console.log("3. Fugir")

  let escolha = prompt("Escolha 1, 2 ou 3:")

  if (escolha == "1") {
    console.clear()
    console.log("\nVocê reúne toda a coragem que possui e enfrenta o monstro.")
    console.log("O monstro se dissolve em sombras, derrotado pela sua determinação.")
    coragem += 1
    console.log("Sua coragem aumentou! Coragem atual: " + coragem)
    salvarCheckpoint()
    continuarJornada()
  } else if (escolha == "2") {
    console.clear()
    console.log("\nVocê reflete a desmotivação da criatura de volta para ela.")
    console.log("A criatura se dissolve em uma nuvem de poeira.")
    empatia += 1
    console.log("Sua empatia aumentou! Empatia atual: " + empatia)
    salvarCheckpoint()
    continuarJornada()
  } else if (escolha == "3") {
    console.clear()
    console.log("Você decide fugir, mas a desmotivação é mais rápida do que você imagina...")
    console.log("Você quase foi consumido pela desmotivação.")
    vida -= 15
    continuarJornada()
    
  } else {
    console.log("Escolha inválida. Tente novamente.")
    enfrentarMonstroDesmotivacao()
  }
}

function continuarJornada() {
  console.log("\nContinuando a jornada...")
  menu2()
}

function continuacaoDaJornada() {
  console.clear()
  console.log("Depois de derrotar o monstro, você segue seu caminho, agora mais forte.")
  console.log("Depois de muito tempo andando, você finalmente encontra um lugar que parece ser povoado.")
  console.log("É o reino de Ahnamela")
  avancarAhnamela()
}

function avancarAhnamela(){
  console.log("Ao passar pelos enomes portões de Ahnamela, você se depara com uma cidade majestosa, enorme, as contruções são deslumbrantes e a luz do sol ilumina a cidade.")
  console.log("\nO que você decide fazer primeiro?")
  console.log("1. Procurar algo para comer")
  console.log("2. Procurar abrigo")
  console.log("3. Procurar belas moças")

  let escolha = prompt("Escolha 1, 2 ou 3:")
  if (escolha == "1"){
    procurarComida() 
    
  }
  else if(escolha == '2'){
    procurarAbrigo()
    
  }
  else{
    procurarBelasMocas()
  }
}

  function procurarComida(){
    console.clear()
    console.log("Caminhando um pouco pela cidade, você vê vários restaurantes, mas nenhum deles cabia no seu bolso.\nVocê decide procurar algo para comer na parte mais pobre do reino.")
    console.log("Você encontra uma taberna, ao entrar nela você vai em direção ao taberneiro, o que você pede?")
    console.log("1. Roubar um almoço (0 moedas)")
    console.log("2. Um almoço (3 moedas)")
    console.log("3. Uma cerveja (2 moedas)")

    let escolha = prompt("Escolha 1, 2 ou 3:")
      if (escolha == "1"){
        console.clear()
        console.log("Quando nínguem está olhando, você passa a mão em uma marmita e vai embora despercebido")
        vida -= 20
        continuarAhnamela1()

      }
      else if(escolha == "2" && inventario.includes("3x Moedas")){
        console.clear()
        inventario.pop()
        console.log("Você paga o almoço, gastando tudo o que você tinha.")
        console.log("Agora você está saciado e com mais energia.")
        vida += 10
        continuarAhnamela1()
        
      }

      else if(escolha == 3  && inventario.includes("3x Moedas")){
        console.clear()
        console.log("Você paga a cerveja, sobrando apenas uma moeda no seu bolso. Você ainda está cansado e com fome.")
        inventario.pop()
        inventario = ["1x Moedas"]
        vida -= 15
        continuarAhnamela1()
        
      }

     else{
       console.log("Escolha inválida.")
       procurarComida()
     }
  }  

  function procurarAbrigo(){
    console.log("Você decide procurar abrigo, mas está fora de questão alugar um local para passar o tempo.")
    console.log("O que você faz?")
    console.log("1. Procura alguém disposto a te deixar ficar na casa dela.")
    console.log("2. Desiste de procurar abrigo")
    
    let escolha = prompt("Escolha 1 ou 2:")

    if(escolha == "1"){
      console.clear()
      console.log("Você decide procurar alguém disposto a te deixar ficar na casa dela.")
      console.log("Na sua procura, você vai a um parque falar com as pessoas.")
      console.log("Você cai em uma conversa com uma velhinha, depois de você explicar a sua situação e ter mais um bom tempo de bate-papo, você decide perguntar para ela se ela deixaria você ficar na casa dela por um tempo.")
      console.log("Ela diz que sim, contanto que você ajude ela com as tarefas de casa também.")
      console.log("Agora você tem moradia")
      continuarAhnamela2()
    }
    else{
      console.log("Você desiste de procurar abrigo.")
      continuarAhnamela2()
    }
  }


  function procurarBelasMocas(){
    console.log("Você vai em direção as belas moradoras do reino, tentando usar seu charme para conquistá-las")
    console.log("Elas não estão confortáveis com sua presença, chamam os guardas reais e você é espancado pelos guardas.")
    vida -= 25
    continuarAhnamela3()
  }

function continuarAhnamela1(){
  console.log("E agora...")
  console.log("O que você faz?")

  console.log("1. Procurar abrigo")
  console.log("2. Procurar belas moças")

  let escolha = prompt("Escolha 1 ou 2:")
  if (escolha == "1"){
    procurarAbrigo() 

  }
  else{
    procurarBelasMocas()
  }
}

function continuarAhnamela2(){
  console.log("E agora...")
  console.log("O que você faz?")

  console.log("1. Dormir para recuperar as energias")
  console.log("2. Procurar belas moças")

  let escolha = prompt("Escolha 1 ou 2:")
  if (escolha == "1"){
    dormir()

  }
  else{
    procurarBelasMocas()
  }
}

function continuarAhnamela3(){
  console.log("E agora...")
  console.log("O que você faz?")

  console.log("1. Procurar comida")
  console.log("2. Procurar abrigo")

  let escolha = prompt("Escolha 1 ou 2:")
  if (escolha == "1"){
    procurarComida() 

  }
  else{
    procurarAbrigo()
  }

  
}

function dormir(){
  console.clear()
  console.log("Depois de uma longa soneca, agora com as energias recuperadas, você decide partir, rumo às Olimpíadas.")
  console.log("Digite 1 para avançar")
  let escolha = prompt("Escolha 1:")
  if(escolha == 1){
    menu3()
  }
  else{
    console.log("Escolha inválida.")
    dormir()
  }
}

function continuacaoDaJornada2(){
  console.clear()
  console.log("Você se despede do reino de Ahnamela e vai em diração as Olimpíadas")
  console.log("Você está confiante que vai conseguir chegar nas Olimpíadas, o seu treinamento foi muito rigoroso, e sua jornada até aqui foi muito difícil.")
  console.log("Mas agora não é hora de desistir, você estufa o peito e continua em frente.")
  chegandoNasOlimpiadas()
}

function chegandoNasOlimpiadas(){
  console.log("Depois de muito tempo andando e muitas adversidades no caminho (mosquitos)")
  console.log("Você avista ao longe o que você achou ser apenas um sonho.")
  console.log("O destino pelo qual você lutou incansavelmente. Após atravessar reinos devastados, enfrentar monstros que personificavam seus medos e inseguranças, e superar as cicatrizes deixadas pelo exílio, você agora se encontra mais perto da grandiosa arena olímpica.")
  let escolha = prompt("Digite 1 para avançar rumo ao seu sonho")
  if(escolha == 1 && vida >= 30){
  enfrentarMonstroVoce()
  }
  else if(escolha == 1 && vida < 30){
    console.clear()
    console.log("Você não tem a força necessária para chegar ao seu sonho.")
    console.log("As suas escolhas não foram boas o suficiente.")
    console.log("Fim de jogo.")
    console.log("\n")
    querContinuar()
  }
  else{
    console.log("Escolha inválida.")
    chegandoNasOlimpiadas()
  }
}

function querContinuar(){
  console.log("Deseja reiniciar?")
  console.log("1. Sim")
  console.log("2. Não")
  let escolha = prompt("Escolha 1 ou 2:")
  if(escolha == 1){
    iniciarJogo()
  }
  else{
    console.log("Obrigado por jogar!")
    console.log("Desenvolvido por: Bruno Luiz")
    console.log("Espero que tenha gostado!")
  }
}

function enfrentarMonstroVoce(){
  console.clear()
  console.log("Sua felicidade é interrompida, o brilho do sol desaparece, dando lugar a um ambiente gélido e desolado. As sombras se movem em torno de você, e uma figura emerge da escuridão.")
  console.log("É uma cópia perfeita de Kasra, um reflexo sombrio de tudo o que ele é e representa. O clone veste o mesmo uniforme, tem as mesmas cicatrizes e até os mesmos olhos, mas há algo de profundamente perturbador em sua presença. Seus olhos são frios, como se ele nem tivesse emoções.")

  console.log("█▓▒▓█▀██▀█▄░░▄█▀██▀█▓▒▓█\n█▓▒░▀▄▄▄▄▄█░░█▄▄▄▄▄▀░▒▓█\n█▓▓▒░░░░░▒▓░░▓▒░░░░░▒▓▓█")


console.log("\nO que você faz?")
console.log("1. Usar a força bruta para derrotá-lo")
console.log("2. Aceitá-lo")
console.log("3. Fugir")

let escolha = prompt("Escolha 1, 2 ou 3:")
if (escolha == "1"){
  console.log('O clone reflete cada ataque com a mesma intensidade, a força física não é a solução.')
  enfrentarMonstroVoce()
}
else if(escolha == 2){
  console.clear()
  console.log("Você percebe que o monstro é uma representação de suas próprias inseguranças, medos e dúvidas. Em vez de lutar contra ele, ele decide aceitar essa parte de si mesmo, reconhecendo que essas emoções também fazem parte de sua identidade e jornada.")
  console.log("A criatura, que antes parecia imponente e ameaçadora, começa a mudar. As sombras que a cercavam se dissipam, revelando um semblante mais sereno. As duas figuras, agora uma só, se fundem em um único ser, completo e em paz consigo mesmo.")
    fim()
}
else if(escolha == 3){
  console.log("Você decide fugir.")
  console.log("Apesar de sua tentativa de fuga, você percebe que está correndo em círculos. Não importa a direção que tome, você acaba de volta ao mesmo ponto, diante da sua cópia.")
  enfrentarMonstroVoce()
  }

}

function fim(){
  console.log("\n")
  console.log("Tendo enfrentado seus maiores medos e aceitado sua verdadeira essência, alcançou o que parecia impossível. As Olimpíadas foram mais do que uma meta; foram a realização de um sonho forjado na aceitação e no autoconhecimento. Ao vencer sua batalha interna, ele se torna mais do que um atleta; ele se torna um símbolo de perseverança e de coragem.")
  console.log("Obrigado por jogar!")
  console.log("Desenvolvido por: Bruno Luiz")
  console.log("Espero que tenha gostado!")
}

iniciarJogo()
