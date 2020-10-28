# kevin-miller-react-portfolio
My portfolio of projects.

Check out the <a href='https://kevin-miller-react-portfolio.herokuapp.com/'>deployed website on Heroku servers!</a>!

For a list of my various projects, go to the projects page in the portfolio, or check out <a href='https://github.com/Koldenblue'>my profile</a> here on GitHub.

## Discussion of this Portfolio Webpage

This webpage is a portfolio designed to provide easy links to and an overview of all my various projects. My portfolio includes my resume, skills, and some additional information. See the deployed website to view the various projects.

This webpage was originally programmed in pure HTML / CSS, before being migrated to React. The <a href='https://koldenblue.github.io/kevin-miller-portfolio/'>older, out of date portfolio</a> was deployed<a href='https://github.com/Koldenblue/kevin-miller-portfolio'> using GitHub pages</a>. For this current portfolio, the React router is used to connect the pages on the site. Each individual page is split into various React components, as well. Several advantages were gained by the use of React. A good example is the navbar. The navbar is encapsulated within its own component, and is thus easily editable. Since each route on the site uses the same navbar component, any edits to the navbar are propogated to all routes. This behavior can be compared to editing the navbar in the original non-React portfolio, in which all pages on the site were vanilla HTML/CSS. In that case, since the navbar was coded separately on each HTML page, any changes to the navbar would have to be made to every single HTML file.

In addition to the obvious performance and organizational benefits, React has provided a neat way of thinking about programming. The ultimate goal is to have completely encapsulated components, which can then be easily transferred where needed. This has long been one of the main goals of object-oriented programming. Several components in this project are designed with the goal of encapsulation in mind - for example, I have already transferred the image zoom components in the '/portfolio' route to another project.

React is fairly new technology - less than a decade old. However, my work on these websites, as well as additional research and reading, clearly indicate why React and similar libraries such as Angular are growing hugely in popularity. Not only do they offer performance benefits, but they offer a great way of thinking about best coding practices and code itself. 
