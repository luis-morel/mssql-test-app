// Importing required Node.js packages
const bodyParser = require('body-parser'); // Body parsing middleware
const express = require('express'); // Web server framework
const logger = require('morgan')('tiny'); // HTTP request logging middleware
const passport = require('passport'); // User authentication middleware
const path = require('path'); // Directory & file path handling module
const session = require('express-session'); // Session-handling middleware

// Express app declaration and configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(session({ secret: 'ILoveP1zza', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Server listening port declaration
const PORT = process.env.PORT || 3005;