# kevin-miller-react-portfolio
My portfolio of projects.

Check out the <a href='https://kevin-miller-react-portfolio.herokuapp.com/'>deployed website on Heroku servers!</a>!

For a list of my various projects, go to the projects page in the portfolio, or check out <a href='https://github.com/Koldenblue'>my profile</a> here on GitHub.

## About this portfolio webpage:

This webpage is a portfolio designed to provide easy links to and an overview of all my various projects. My portfolio includes my resume, skills, and some additional information. Before migrating the webpage to React, this webpage was originally programmed in pure HTML / CSS. The <a href='https://koldenblue.github.io/kevin-miller-portfolio/'>older, out of date portfolio</a> was deployed from the <a href='https://github.com/Koldenblue/kevin-miller-portfolio'>older GitHub project page</a> using GitHub pages. For the current portfolio, the webpage was translated into React - the React router is used to connect the pages on the site, and each page is split into various components. There have been several advantages gained by the use of React. A great example of this is the navbar. The navbar is encapsulated within its own component, and is thus easily editable. Since each route on the site uses the same navbar component, any edits to the navbar are propogated to all routes. This behavior can be compared to editing the navbar in the original non-React portfolio, in which all pages on the site were vanilla html/CSS. In that case, since the navbar is coded separately on each html page, any changes to the navbar would have to be made to every single html page file.
