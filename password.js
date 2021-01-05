const arvg = process.argv; 
const filteredArgv = arvg.slice(2); //strip the head of the arvg method
const password = filteredArgv.toString() //contert type array to string

const obfuscator = (password) => {
  let result = ""
  for (let i = 0; i < password.length; i++){
    if (password[i] === "a") {
      result += "4";
    } else if (password[i] === "e") {
      hresult += "3";
    } else if (password[i] === "o") {
      result += "0";
    } else if (password[i] === "l") {
      result += "1";
    } else {
      result +=password[i]
    }
  } return console.log(result)
}

obfuscator(password)