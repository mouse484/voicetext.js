const args = require("./args");

class VoiceText {
    constructor(api_key) {
        this.api_key = api_key;

        this.SPEAKER = args.SPEAKER;
        this.FORMAT = args.FORMAT;
        this.EMOTION = args.EMOTION;
        this.EMOTION_LEVEL = args.EMOTION_LEVEL;

        this._speaker = this.SPEAKER.SHOW;
        this._format = this.FORMAT.WAV;
        this._emotion = void 0;
        this._emotion_level = void 0;

        this._pitch = 100;
        this._speed = 100;
        this._volume = 100;
    }

    speaker(speaker) {
        if (speaker.match(this.SPEAKER)) {
            this._speaker = speaker;
            return this;
        } else {
            throw new Error("SPEAKER required.");
        }
    }
    format(format) {
        if (format.match(this.FORMAT)) {
            this._format = format;
            return this;
        } else {
            throw new Error("FORMAT required.");
        }
    }
    emotion(emotion) {
        if (this._speaker === this.SPEAKER.SHOW)
            throw new Error("Emotional parameters are not available in the show.")
        if (emotion.match(this.EMOTION)) {
            this._emotion = emotion;
            return this;
        } else {
            throw new Error("EMOTION required.");
        }
    }
    emotion_level(emotion_level) {
        if (this._speaker === this.SPEAKER.SHOW)
            throw new Error("Emotional parameters are not available in the show.")
        if (emotion_level.match(this.EMOTION_LEVEL)) {
            this._emotion_level = emotion_level;
            return this;
        } else {
            throw new Error("EMOTION_LEBEL required.");
        }
    }

    pitch(pitch) {
        if (50 <= pitch <= 200) {
            console.log("okk");
        }
    }
}

module.exports = VoiceText;
