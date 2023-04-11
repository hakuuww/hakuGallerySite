  // Get a reference to the div element
  var markdownDiv = document.getElementById("markdown-content");

  // Define the Markdown content
  var markdownContent = "";

  // Convert the Markdown to HTML using the marked library
  var htmlContent = marked(markdownContent);

  // Set the innerHTML of the div element to the HTML content
  markdownDiv.innerHTML = htmlContent;