const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
//var actions = ['pizzas', 'ordenar'];

 exports.celtabot = functions.https.onRequest((req, res) => {
  console.log("Hello from Firebase!");
   if(req.body.result && req.body.result.parameters && req.body.result.contexts){
        
        console.log(req.body.result.contexts[0]);
        
        switch(req.body.result.action) {
            case "cantidad":
                getCampuses();
                //break;
            case actions[1]:
                console.log("entro en " + actions[1]);

                var speech = "Has cancelado la orden."

                if((req.body.result.contexts[0].parameters.orderResponse).toLowerCase() == "si")
                    speech = "Has ordenado " + req.body.result.contexts[0].parameters.quantity + " pizza sabor a " + req.body.result.contexts[0].parameters.pizzaFlavor;

                return res.json({
                    speech: speech,
                    displayText: speech,
                    source: 'test'
                });
                //break;
            default:
                console.log("No entro en nada.");
        };

        //if(req.body.contexts[0].name)

    }

 });

 function getCampuses(){
        console.log("entro en cantidad");
         return res.json({
                    speech: "Bienvenido, de que quieres la pizza? \npeperoni, maiz, napoli.",
                    displayText: "tenemos pizza de: peperoni, maiz, napoli",
                    source: 'test'
                });
 }
//app.use(bodyParser.urlencoded({extendd: true}))
//app.use(bodyParser.json())

/*app.post('/echo', function(req, res) {
    if(req.body.result && req.body.result.parameters && req.body.result.contexts){
        var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.pizza ? req.body.result.parameters.pizza : "Seems like some problem. Speak again."
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
    }

});*/

/*app.post('/api', (req, res) => {

   
    
})*/

/*app.get('/api/ordenar/:sabor/:cantidad', (req, res) => {

    var sabor = req.params.sabor;
    var cantidad = req.params.cantidad;

    var result = 'Ha ordenado ' + cantidad + ' pizzaz sabor a ' + sabor;

    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify({speech: result, displayText: result}));
})*/

/*app.listen(port, () => {
    console.log(`listen url http://localhost:${port}`);
})*/
