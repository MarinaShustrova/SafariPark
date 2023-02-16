require('@babel/register');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const session  = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'secret',
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    expires: new Date('Dec 31, 2021'), // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

//*  далее будут подключены роутеры

const app = express();
app.use(session(sessionConfig));

app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//* app.use.....

module.exports = app;
