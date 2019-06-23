window.cipher = {

  encode: (text, secretPass) => {
    let result ='';
    for (let i=0 ; i < text.length ; i++ ){
    let formula = text.charCodeAt(i)
      //MAYUSCULAS
      if(formula >= 65 && formula <=  90) {
      result += String.fromCharCode ((formula - 65 + parseInt(secretPass)) % 26 + 65)
      }
      //Minusculas
      if(formula >= 97 && formula <=  122) {
      result += String.fromCharCode ((formula - 97 + parseInt(secretPass)) % 26 + 97)
      }
      //ESPACIO
      if(formula >= 32 && formula <= 32) {
      result += String.fromCharCode ((formula - 32 + secretPass) % 1 + 32)
      }
      //NUMEROS
      if(formula >= 48 && formula <=  57) {
        result += String.fromCharCode(((formula - 48 + parseInt(secretPass)+20) % 10) + 48)
      }
    } return result
},
decode: (text, secretPass) => {
  let result='';
for (let i=0 ; i < text.length ; i++ ){
  let formula = text.charCodeAt(i)
    //MAYUSCULAS
    if(formula >= 65 && formula <=  90) {
    result += String.fromCharCode ((formula - 65 + parseInt(secretPass)) % 26 + 65)
    }
    //Minusculas
    if(formula >= 97 && formula <=  122) {
    result += String.fromCharCode ((formula - 97 + parseInt(secretPass)) % 26 + 97)
    }
    //ESPACIO
    if(formula >= 32 && formula <= 32) {
    result += String.fromCharCode ((formula - 32 + secretPass) % 1 + 32)
    }
    //NUMEROS
    if(formula >= 48 && formula <=  57) {
      result += String.fromCharCode(((formula - 48 + parseInt(secretPass)+20) % 10) + 48)
    }
  } return result
} 
}
