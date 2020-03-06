const express = require("express");
const path = require("path");

//initializes the app and creates a port
const app = express();
const PORT = process.env.PORT || 3000;

//sets up body parsing, static, and routes' middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"))

//routes that send user to correct html pages
module.exports = function(app) {
    app.get("/notes", function(res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function(res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};

// ROuting for Notes
module.exports = function(app) {
    //API GET requests

    app.get("/public/notes", function(req, res) {
        res.json($noteTitle);
    });

    app.get("/public/notes", function(req, res) {
        res.json($noteText);
    });

    //API POST requests

    app.post("/public/notes", function(req, res) {
        if (note.length < 0) {
            note.push(req.body);
            res.json(saveNote);
            var fs = require("fs");
            json = JSON.stringify()
            fs.writeFile("db.json", json)
        };
    });

    //API DELETE requests

    app.delete("/public/notes", function(id) {
        renderNoteList.push(deleteNote);
        res.json("db.json", json)
    })
};

//starts the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
