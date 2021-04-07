var numeroSecreto1 = parseInt(Math.random() * 10)
var numeroSecreto2 = parseInt(Math.random() * 10)
var numeroSecreto3 = parseInt(Math.random() * 10)
var tentativas1 = 3
var tentativas2 = 3
var tentativas3 = 3

alert('Bem vindo a tentativa de acertar a senha do cofre, se conseguir abrir leva o que tem dentro!')

while(tentativas1 > 0){
  
var chute1 = parseInt(prompt('Vamos começar, digite um número entre 0 e 10 para tentar acertar o primeiro numero da senha.'))

  if (numeroSecreto1 == chute1){
    alert('Você acertou o primeiro número!')
    document.write('<h2>' + numeroSecreto1 +  '</h2>')
    break
    } else if (chute1 > numeroSecreto1){
      alert('O número secreto é menor.')
      tentativas1 = tentativas1 - 1
      alert('você tem mais ' + tentativas1 + ' sobrando!')      
    } else if(chute1 < numeroSecreto1){
      alert('O número secreto é maior.')
      tentativas1 = tentativas1 - 1
      alert('você tem mais ' + tentativas1 + ' sobrando!')      
      }  
}

if (chute1 != numeroSecreto1){
  alert('----- GAME OVER -----')
  alert('A senha correta era: ' + numeroSecreto1 + numeroSecreto2 + numeroSecreto3)
}else {

    while(tentativas2 > 0){

      var chute2 = parseInt(prompt('Digite um número entre 0 e 10 para a segunda senha'))

      if (numeroSecreto2 == chute2){
        alert('Você acertou o segundo número!')
        document.write('<h3>' + numeroSecreto2 +  '</h3>')
        break
        } else if (chute2 > numeroSecreto2){
          alert('O número secreto é menor.')
          tentativas2 = tentativas2 - 1
          alert('você tem mais ' + tentativas2 + ' sobrando!')      
        } else if(chute2 < numeroSecreto2){
          alert('O número secreto é maior.')
          tentativas2 = tentativas2 - 1
          alert('você tem mais ' + tentativas2 + ' sobrando!')      
          }  
    }

    if (chute2 != numeroSecreto2){
      alert('----- GAME OVER -----')
      alert('A senha correta era: ' + numeroSecreto1 + numeroSecreto2 + numeroSecreto3)
    }else {

        while(tentativas3 > 0){

          var chute3 = parseInt(prompt('Digite um número entre 0 e 10 para a terceira senha'))

          if (numeroSecreto3 == chute3){
            alert('Você acertou o terceiro número!')
            document.write('<h4>' + numeroSecreto3 +  '</h4>')
            alert('Parabens você conseguiu abrir o cofre, mas pocha que pena ele estava vazio! ')
            break
            } else if (chute3 > numeroSecreto3){
              alert('O número secreto é menor.')
              tentativas3 = tentativas3 - 1
              alert('você tem mais ' + tentativas3 + ' sobrando!')      
            } else if(chute3 < numeroSecreto3){
              alert('O número secreto é maior.')
              tentativas3 = tentativas3 - 1
              alert('você tem mais ' + tentativas3 + ' sobrando!')      
              }  
        }

        if (chute3 != numeroSecreto3){
          alert('----- GAME OVER -----')
          alert('A senha correta era: ' + numeroSecreto1 + numeroSecreto2 + numeroSecreto3)
  
  }
 }
}