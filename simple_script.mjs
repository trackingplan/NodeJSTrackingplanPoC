/*
    This is a proof of concept of how to use Trackingplan with NodeJS
    It's a simple script that sends events to Trackingplan without having a server
    It also shows that Trackingplan can capture the end of the script
*/
import Trackingplan from 'trackingplan-node-sdk';
import analytics from './analytics.mjs';

Trackingplan.init("TP5551234567", {
    debug: true,
    batchInterval: 1,
    //contentFilters: ["event6"]
});

async function sendEvents() {
    /* Track page views */
    analytics.track("event1", { prop1: "value1" });
    analytics.track("event2", { prop1: "value1" });
    analytics.track("event3", { prop1: "value1" });
    analytics.track("event4", { prop1: "value1" });
    await new Promise(resolve => setTimeout(resolve, 10000));

    analytics.track("event5", { prop1: "value1" });
    analytics.track("event6", { prop1: "value1" });
    await new Promise(resolve => setTimeout(resolve, 1000));
    Trackingplan.flush();
    Trackingplan.stop();
    analytics.track("event7", { prop1: "value1" });
    analytics.track("event8", { prop1: "value1" });
}

sendEvents();
