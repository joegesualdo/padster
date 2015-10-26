function pad(str, max, paddingChar) {
  if(paddingChar == undefined){
    paddingChar = "0"
  }
  str = str.toString();
  return str.length < max ? pad(paddingChar + str, max) : str;
}

module.exports = pad
