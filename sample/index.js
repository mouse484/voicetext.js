const VoiceText = require("../src");

const vt = new VoiceText(process.env.TOKEN);

vt
    .speaker(vt.SPEAKER.HARUKA)
    .format(vt.FORMAT.MP3)
    .emotion(vt.EMOTION.HAPPINESS)
    .emotion_level(vt.EMOTION_LEVEL.EXTREME);
