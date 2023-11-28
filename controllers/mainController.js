const path = require('path');

module.exports = {
  about: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "about.html")),
  contac: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "contac.html")),
  home: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "home.html")),
  music: (req, res) =>
    res.sendFile(path.join(__dirname, "..", "views", "music.html")),
};
