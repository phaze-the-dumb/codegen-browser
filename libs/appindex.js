const fetch = require('node-fetch');
const errors = require('./errors.js');

let queue = [];
let currentapp = null;

let addAppToQueue = async ( id, onDone ) => {
    let appDataRequest = await fetch('https://oculusdb.rui2015.me/api/connected/'+id);
    console.log('Got Request Data');

    appDataRequest.json().then(data => {
        console.log('Adding '+data.name)
    }).catch(e => {
        onDone(errors['404'])
    });
}

addAppToQueue('24480625267927')