// import marked library
import marked from 'marked';

// get the content box element
const contentBox = document.querySelector('.content-box');

// get the Markdown content
const markdownContent = ``;



// convert Markdown to HTML
const htmlContent = marked(markdownContent);

// insert the HTML content into the content box
contentBox.innerHTML = htmlContent;