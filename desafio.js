//VARIAVEIS 
let cartasUsuario = []
let cartasComputador = []
let pontosUsuario = ""
let pontosComputador = ""
let textoComputador = ""
let textoUsuario = ""
let vencedor = ""
//SAUDAÇÃO E INICIO DO JOGO
const inicia = confirm(`Boas vindas ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)
if (inicia) {
   for (let i = 0; i < 2; i++) {
      cartasComputador.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
   }
} else {
   alert("Fim do jogo! Obrigado.")
}
// ELIMINANDO POSSIBILIDADE DE AA    
if (21 < cartasComputador[0].valor + cartasComputador[1].valor || 21 < cartasUsuario[0].valor + cartasUsuario[1].valor) {
   for (let i = 0; i < 2; i++) {
      cartasComputador.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      pontosUsuario = (cartasUsuario[0].valor) + (cartasUsuario[1].valor)
      pontosComputador = (cartasComputador[0].valor) + (cartasComputador[1].valor)
      textoUsuario = cartasUsuario[0].texto + (" ") + cartasUsuario[1].texto
      textoComputador = (cartasComputador[0].texto) + (" ") + (cartasComputador[1].texto)
   }
} else {
   pontosUsuario = (cartasUsuario[0].valor) + (cartasUsuario[1].valor)
   pontosComputador = (cartasComputador[0].valor) + (cartasComputador[1].valor)
   textoUsuario = cartasUsuario[0].texto + (" ") + cartasUsuario[1].texto
   textoComputador = (cartasComputador[0].texto) + (" ") + (cartasComputador[1].texto)
}
//VERIFICANDO SE O USUARIO QUER COMPRAR
for (let i = 1; pontosUsuario < 21; i++) {
   let compraMais = confirm(`Suas cartas são: ${textoUsuario}. Você tem: ${pontosUsuario} pontos. 
A carta revelada do Computador é: ${cartasComputador[0].texto} (${cartasComputador[0].valor} pontos)
Você deseja comprar mais uma carta? OK para sim`)
   if (compraMais === true) {
      cartasUsuario.push(comprarCarta())
      let i = 1
      i++
      pontosUsuario += cartasUsuario[i].valor
      textoUsuario += (" ") + cartasUsuario[i].texto
   } else {
      break
   }
}
//FAZENDO PC COMPRA QUANDO ESTIVER PERDENDO
while (pontosComputador < 21 && pontosUsuario > pontosComputador) {
   let j = 1
   j++
   cartasComputador.push(comprarCarta())
   pontosComputador += cartasComputador[j].valor
   textoComputador += (" ") + cartasComputador[j].texto
}
// VERIFICANDO VENCEDOR
if (pontosUsuario > pontosComputador && pontosUsuario <= 21) {
   vencedor = "Você ganhou! Parabéns!"
} else if (pontosUsuario < pontosComputador && pontosComputador <= 21){
   vencedor = "O computador ganhou!"
} else if (pontosComputador > 21 && pontosUsuario <= 21){
   vencedor = "Você ganhou! Parabéns!"
} else if (pontosUsuario > 21 && pontosComputador <= 21){
   vencedor = "O computador ganhou!"
}else{
   vencedor = "Usuario e computador empataram!"
}
//INFORMANDO O RESULTADO
console.log("CARTAS USU:", textoUsuario,"PONTOS USU:", pontosUsuario)
console.log("CARTAS CPU:", textoComputador,"PONTOS CPU:", pontosComputador)
alert(` Suas cartas são: ${textoUsuario}. Você fez: ${pontosUsuario} pontos. 
As cartas do computador são ${textoComputador}. Ele fez: ${pontosComputador} pontos.)
${vencedor}`)
      alert(`Fim do jogo! Obrigado e volte sempre!`)

