const gTTS = require("gtts");
const path = require("path");
const p = path.join(__dirname, "../public/voice/voice.mp3");
module.exports.getText = (req, res, next) => {
  res.render("text");
};
module.exports.postText = (req, res, next) => {
  const text = req.body.text;

  var gtts = new gTTS(text, "en");
  gtts.save(p, function (err, result) {
    if (err) {
      throw new Error(err);
    }
    console.log("Text to speech converted!");
    res.sendFile(path.resolve(__dirname, "../public/play.html"));
  });
};
