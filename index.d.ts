import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface DialogflowConfiguration {
    credentials: string;
    projectId?: string;
    sessionId?: string;
    languageCode?: string;
    audioEncoding?: string;
    sampleRate?: number;
    bufferSize?: number;
}
export interface DetectIntentResponse {
    responseId: string;
    queryResult: any;
}
export interface StreamingDetectIntentResponse {
    responseId: string;
    recognitionResult: any;
    queryResult: any;
}
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
export declare class Dialogflow extends IonicNativePlugin {
    /**
     * Returns that plugin has streaming support.
     * @return {boolean} Returns that plugin has streaming support.
     */
    isStreamingAvailable(): boolean;
    /**
     * Configures dialogflow.
     * @param {DialogflowConfiguration} config Dialogflow configuration options.
     * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
     */
    configure(config: DialogflowConfiguration): Promise<void>;
    /**
     * Starts recording microphone input.
     * @return {Promise<void>} Returns a promise that resolves after recording was started.
     */
    startRecording(): Promise<void>;
    /**
     * Stops recording microphone input.
     */
    stopRecording(): void;
    /**
     * Gets the audio recording as base64 string.
     * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
     */
    getRecording(): Promise<string>;
    /**
     * Starts listening to microphone input.
     * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
     */
    startListening(): Observable<StreamingDetectIntentResponse>;
    /**
     * Stops listening to microphone input.
     */
    stopListening(): void;
    /**
     * Detects intent from a text string.
     * @param {string} text Text input containing intent.
     * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
     */
    detectIntentFromText(text: string): Promise<DetectIntentResponse>;
    /**
     * Detects intent from an audio base64 encoded string.
     * @param {string} Audio input containing intent.
     * @return {Promise<DetectIntentResponse>} Returns a promise containing detect intent response.
     */
    detectIntentFromAudio(audio: string): Promise<DetectIntentResponse>;
    /**
     * Deletes all active contexts in the current session.
     * @return {Promise<void>} Returns an empty promise.
     */
    resetSession(): Promise<void>;
}
