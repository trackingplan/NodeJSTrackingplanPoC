/*
    Simple server to test Trackingplan NodeJS SDK
    Trackingplan is Started in the main module code and captures all traffic from so on
*/

import express from 'express';
import Trackingplan from 'trackingplan-node-sdk';
import analytics from './analytics.mjs';

const port = 3500;

var app = express();

Trackingplan.init("TP5551234567", {
    debug: true,
    batchInterval: 1,
    // If contentfilters is not set, all events are sent to Trackingplan
    // If it's set, only payloads / endpoints that contain a string in the list are sent
    contentFilters: ["decathlon.es"]

});

app.get('/send', function (req, res) {
    analytics.track('event', req.query);
    res.send('Request received: ' + JSON.stringify(req.query, null, 2));
});


app.listen(port);