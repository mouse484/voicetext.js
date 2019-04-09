const SPEAKER = {
    SHOW: "show",
    HARUKA: "haruka",
    HIKARI: "hikari",
    TAKERU: "takeru",
    SANTA: "santa",
    BEAR: "bear",
};

class VoiceText {
    constructor(api_key) {
        this.api_key = api_key;

        this.SPEAKER = SPEAKER;

        this._speaker = this.SPEAKER.SHOW;
        //this._pitch = 100;
        //this._speed = 100;
        //this._volume = 100;
        //this._emotion = void 0;
        //this._emotion_level = void 0;
        //this._format = this.FORMAT.WAV;
    }

    speaker(speaker) {
        if (speaker.match(this.SPEAKER)) {
            this._speaker = speaker;
            return this;
        } else {
            throw new TypeError("SPEAKER required.");
        }
    }




}

module.exports = VoiceText;
