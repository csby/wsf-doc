import Vue from 'vue'

const eventBus = new Vue();

function on(event, callback) {
    eventBus.$on(event, callback);
}

function off(event, callback) {
    eventBus.$off(event, callback);
}

function fire(eventName, ...args) {
    eventBus.$emit(eventName, ...args);
}

export default {
    on,
    off,
    fire
}