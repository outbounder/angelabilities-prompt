# angelabilities-prompt

a simple quick & dirty command line prompt

## usage

```
module.exports = function(angel){
  require("angelabilities-prompt")(angel)
  
  angel.on("prompt me", function(){
    angel.prompt("please provide feedback", function(err, response){
      // typeof response == "string"
    })
  })
  
  angel.on("prompt me several times", function(){
    angel.prompt( [
      "please provide feedback 1",
      "please provide feedback 2"
    ], function(err, responses){
      // Array.isArray(responses) == true
    })
  })
}
```