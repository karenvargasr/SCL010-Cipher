window.cipher = {

  encode: (text, numOffset) => {
    let result ='';
    for (let i=0 ; i < text.length ; i++ ){
    let formula = text.charCodeAt(i)
      //Mayusculas: A se encuentra en el lugar 65 ASCII
      if(formula >= 65 && formula <=  90) {
      result += String.fromCharCode ((formula - 65 + parseInt(numOffset)) % 26 + 65)
      }
      //Minuscula: minucsulas se encuentran en el 97 al 122 ASCII
      if(formula >= 97 && formula <=  122) {
      result += String.fromCharCode ((formula - 97 + parseInt(numOffset)) % 26 + 97)
      }
      //Espacios: el espacio va en el 32, por lo tanto se mantiene 
      if(formula == 32 && formula <= 32) {
      result += String.fromCharCode ((formula - 32 + numOffset) % 1 + 32)
      }
      //NUMEROS: se encuentran desde el 48 al 57 en ASCII
      if(formula >= 48 && formula <=  57) {
        result += String.fromCharCode(((formula - 48 + parseInt(numOffset)+20) % 10) + 48)
      }
    } return result
},
decode: (text, numOffset) => {
  let result='';
for (let i=0 ; i < text.length ; i++ ){
  let formula = text.charCodeAt(i)
    //MAYUSCULAS
    if(formula >= 65 && formula <=  90) {
    result += String.fromCharCode ((formula - 65 + parseInt(numOffset)) % 26 + 65)
    }
    //minusculas
    if(formula >= 97 && formula <=  122) {
    result += String.fromCharCode ((formula - 97 + parseInt(numOffset)) % 26 + 97)
    }
    //ESPACIO
    if(formula >= 32 && formula <= 32) {
    result += String.fromCharCode ((formula - 32 + numOffset) % 1 + 32)
    }
    //NUMEROS
    if(formula >= 48 && formula <=  57) {
      result += String.fromCharCode(((formula - 48 + parseInt(numOffset)+20) % 10) + 48)
    }
  } return result
} 
}
