/*
    Server to test Trackingplan NodeJS SDK to demo the stop / start behaviour.
    Trackingplan captures traffic only if its inited and can be stopped anytime.
*/

import express from 'express';
import Trackingplan from 'trackingplan-node-sdk';
import analytics from './analytics.mjs';

const port = 3500;

var app = express();



app.get('/send', function (req, res) {
    analytics.track('event', req.query);
    res.send('Request received: ' + JSON.stringify(req.query, null, 2));
});

app.get('/init', function (req, res) {
    Trackingplan.init("TP5551234567", {
        debug: true,
        batchInterval: 10,
        // If contentfilters is not set, all events are sent to Trackingplan
        // If it's set, only payloads / endpoints that contain a string in the list are sent
        contentFilters: ["GTM123"],
        providersWhitelist: ["segment", "googleanalytics"],
    });
    res.send('Trackingplan Init');
});

app.get('/stop', function (req, res) {
    Trackingplan.stop();
    res.send('Trackingplan Stop');
});

app.listen(port);

