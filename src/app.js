const request = require("request");
const forecast = require("../utils/forecast");

// Initializing the Modules and files Included in the file
const path = require("path"); // to maintain the path and to manage path (location of files / folders)

const express = require("express"); // initializes express
const hbs = require("hbs"); // initializes hbs
// ! Refer Official Documentation of Express.js on its official Site
const app = express(); //starting the Express APp

// Creating the Port which heroku provide to host our Node js Application
const port = process.env.PORT || 3000;



// Define paths for Express config that uses our Path module which is inbuilt in Node Engine ,, HEre we are setting the locations for the files and folders using path module.
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location ,, Setting the view and view engine with express and setting its path
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath); //to register the partials with our views ,, partials are reusable html components

// Setup static directory to serve ,, Setting up the Base or Initial directory for express where our all files and sub folders take place
app.use(express.static(publicDirectoryPath));

// * res.send() for sending the static html page or Object but res.render() to send the dynamic page of hbs
app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Mitesh Tank",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Mitesh Tank aka codewithmitesh",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Mitesh Tank(codewithmitesh@gmail.com)",
    });
});

app.get("/weather", (req, res) => {
    if (!req.query.name) {
        return res.send({
            error: "Please Provide the proper name of Location ",
        });
    }

    forecast(req.query.name, (error, data) => {
        if (error) {
            return res.send({
                error
            });
        }
        res.send({
            location: req.query.name,
            temperature: data,
        })
    });
});

// * NOTE :- '*' is wild card for not response of not declared url request

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Mitesh Tank",
        errorMessage: "Help article not found.",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Mitesh Tank",
        errorMessage: "Page not found.",
    });
});

/*
 * * NOTE :- We al ways need to start our server before doing anything in Express
 */
// ! Starting the Express Server on the port of Localhost:3000
app.listen(port, () => {
    console.log("Server is up on port port "+ port);
});