const { JSDOM } = require('jsdom');

// Create a new JSDOM instance
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
const document = dom.window.document;

// Create the HTML elements
const html = document.documentElement;
html.setAttribute('lang', 'pt-br');

const head = document.head;
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

const title = document.createElement('title');
title.textContent = 'Music Lyric Searcher App';

const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', './css/style.css');

head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);
head.appendChild(link);

const body = document.body;

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'Music Lyric Searcher App';

const form = document.createElement('form');
form.setAttribute('id', 'form');

const input = document.createElement('input');
input.setAttribute('autofocus', '');
input.setAttribute('id', 'search');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter the name of the artist or song...');

const button = document.createElement('button');
button.textContent = 'Search';

form.appendChild(input);
form.appendChild(button);
header.appendChild(h1);
header.appendChild(form);

const ul = document.createElement('ul');
ul.setAttribute('id', 'songs-container');
ul.setAttribute('class', 'songs-container');

const div = document.createElement('div');
div.setAttribute('id', 'prev-and-next-container');
div.setAttribute('class', 'prev-and-next-container');

body.appendChild(header);
body.appendChild(ul);
body.appendChild(div);

const script1 = document.createElement('script');
script1.setAttribute('src', './js/fetchApi.js');

const script2 = document.createElement('script');
script2.setAttribute('src', './js/app.js');

body.appendChild(script1);
body.appendChild(script2);

// Output the resulting HTML
console.log(dom.serialize());

