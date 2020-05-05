var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Dialogflow
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Dialogflow } from '@ionic-native/dialogflow';
 *
 *
 * constructor(private dialogflow: Dialogflow) { }
 *
 * ...
 *
 * let config: DialogflowConfiguration;
 * this.dialogflow.init(config)
 *   .then(() => console.log('Initialized'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * DetectIntentResponse
 *
 * @interfaces
 * StreamingDetectIntentResponse
 */
var Dialogflow = (function (_super) {
    __extends(Dialogflow, _super);
    function Dialogflow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns that plugin has streaming support.
     * @return {boolean} Returns that plugin has streaming support.
     */
    /**
       * Returns that plugin has streaming support.
       * @return {boolean} Returns that plugin has streaming support.
       */
    Dialogflow.prototype.isStreamingAvailable = /**
       * Returns that plugin has streaming support.
       * @return {boolean} Returns that plugin has streaming support.
       */
    function () {
        return true;
    };
    /**
     * Configures dialogflow.
     * @param {DialogflowConfiguration} config Dialogflow configuration options.
     * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
     */
    /**
       * Configures dialogflow.
       * @param {DialogflowConfiguration} config Dialogflow configuration options.
       * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
       */
    Dialogflow.prototype.configure = /**
       * Configures dialogflow.
       * @param {DialogflowConfiguration} config Dialogflow configuration options.
       * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
       */
    function (config) {
        return;
    };
    /**
     * Starts recording microphone input.
     * @return {Promise<void>} Returns a promise that resolves after recording was started.
     */
    /**
       * Starts recording microphone input.
       * @return {Promise<void>} Returns a promise that resolves after recording was started.
       */
    Dialogflow.prototype.startRecording = /**
       * Starts recording microphone input.
       * @return {Promise<void>} Returns a promise that resolves after recording was started.
       */
    function () {
        return;
    };
    /**
     * Stops recording microphone input.
     */
    /**
       * Stops recording microphone input.
       */
    Dialogflow.prototype.stopRecording = /**
       * Stops recording microphone input.
       */
    function () {
        return;
    };
    /**
     * Gets the audio recording as base64 string.
     * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
     */
    /**
       * Gets the audio recording as base64 string.
       * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
       */
    Dialogflow.prototype.getRecording = /**
       * Gets the audio recording as base64 string.
       * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
       */
    function () {
        return;
    };
    /**
     * Starts listening to microphone input.
     * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
     */
    /**
       * Starts listening to microphone input.
       * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
       */
    Dialogflow.prototype.startListening = /**
       * Starts listening to microphone input.
       * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
       */
    function () {
        return;
    };
    /**
     * Stops listening to microphone input.
     */
    /**
       * Stops listening to microphone input.
       */
    Dialogflow.prototype.stopListening = /**
       * Stops listening to microphone input.
       */
    function () {
        return;
    };
    /**
     * Detects intent from a text string.
     * @param {string} text Text input containing intent.
     * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
     */
    /**
       * Detects intent from a text string.
       * @param {string} text Text input containing intent.
       * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
       */
    Dialogflow.prototype.detectIntentFromText = /**
       * Detects intent from a text string.
       * @param {string} text Text input containing intent.
       * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
       */
    function (text) {
        return;
    };
    /**
     * Detects intent from an audio base64 encoded string.
     * @param {string} Audio input containing intent.
     * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
     */
    /**
       * Detects intent from an audio base64 encoded string.
       * @param {string} Audio input containing intent.
       * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
       */
    Dialogflow.prototype.detectIntentFromAudio = /**
       * Detects intent from an audio base64 encoded string.
       * @param {string} Audio input containing intent.
       * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
       */
    function (audio) {
        return;
    };
    /**
     * Deletes all active contexts in the current session.
     * @return {Promise<void>} Returns an empty promise.
     */
    /**
       * Deletes all active contexts in the current session.
       * @return {Promise<void>} Returns an empty promise.
       */
    Dialogflow.prototype.resetSession = /**
       * Deletes all active contexts in the current session.
       * @return {Promise<void>} Returns an empty promise.
       */
    function () {
        return;
    };
    Dialogflow.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], Dialogflow.prototype, "isStreamingAvailable", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Dialogflow.prototype, "configure", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Dialogflow.prototype, "startRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Dialogflow.prototype, "stopRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Dialogflow.prototype, "getRecording", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Dialogflow.prototype, "startListening", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Dialogflow.prototype, "stopListening", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Dialogflow.prototype, "detectIntentFromText", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Dialogflow.prototype, "detectIntentFromAudio", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Dialogflow.prototype, "resetSession", null);
    /**
     * @name Dialogflow
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { Dialogflow } from '@ionic-native/dialogflow';
     *
     *
     * constructor(private dialogflow: Dialogflow) { }
     *
     * ...
     *
     * let config: DialogflowConfiguration;
     * this.dialogflow.init(config)
     *   .then(() => console.log('Initialized'))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     *
     * @interfaces
     * DetectIntentResponse
     *
     * @interfaces
     * StreamingDetectIntentResponse
     */
    Dialogflow = __decorate([
        Plugin({
            pluginName: 'Dialogflow',
            plugin: 'cordova-plugin-dialogflow',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'cordova.plugins.Dialogflow',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://betacut@bitbucket.org/betacut/cordova-plugin-dialogflow.git',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], Dialogflow);
    return Dialogflow;
}(IonicNativePlugin));
export { Dialogflow };
//# sourceMappingURL=index.js.map