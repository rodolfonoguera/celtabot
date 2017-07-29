const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//'use strict'

//const express = require('express');
//const bodyParser = require('body-parser');
//const app = express();
//const port = process.env.PORT || 3000;
//var actions = ['pizzas', 'ordenar'];
var request = require('request');


 exports.celtabot = functions.https.onRequest((req, res) => {
  //console.log("Hello from Firebase!");
   if(req.body.result && req.body.result.parameters && req.body.result.contexts){
        
        console.log(req.body.result.contexts[0]);
        
        switch(req.body.result.action) {
            case "cantidad":
                getCampuses(res);
                break;
            case "campus":
                console.log("entro en campus");

                var speech = "Has cancelado la orden."

               /* if((req.body.result.contexts[0].parameters.orderResponse).toLowerCase() == "si")
                    speech = "Has ordenado " + req.body.result.contexts[0].parameters.quantity + " pizza sabor a " + req.body.result.contexts[0].parameters.pizzaFlavor;

                return res.json({
                    speech: speech,
                    displayText: speech,
                    source: 'test'
                });*/
                break;
            default:
                console.log("No entro en nada.");
        };

        //if(req.body.contexts[0].name)

    }

 });

 function getCampuses(res){
     
        
        request('http://46.101.51.72/api/v1/campuses', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('body',body) // Show the HTML for the Google homepage.
            } else {
                console.warn('error',error);
            }
            });
       /*  return res.json({
                    speech: "Bienvenido, de que quieres la pizza? \npeperoni, maiz, napoli.",
                    displayText: "tenemos pizza de: peperoni, maiz, napoli",
                    source: 'test'
                });*/

                // mirar esto
                //https://nodejs.org/api/http.html#http_http_request_options_callback
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
