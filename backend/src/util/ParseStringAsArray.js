module.exports = function parseStringAsAray(ArrayAsString){
   return ArrayAsString.split(',').map(tech => tech.trim())
}