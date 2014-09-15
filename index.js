var async = require("async")
module.exports = function(angel){
  var promptUser = function(text, callback){
    var response = ""
    var handleInput = function(chunk){
      response += chunk.toString()
      if(response.charAt(response.length-1) == "\n") {
        process.stdin.pause()
        process.stdin.removeListener("data", handleInput)
        callback(null, response.substr(0, response.length-1))
      }
    }
    console.info(text)
    process.stdin.resume()
    process.stdin.on("data", handleInput)
  }
  angel.prompt = function(text, callback){
    if(Array.isArray(text)) 
      async.mapSeries(text, promptUser, callback)
    else
      promptUser(text, callback)
  }
}