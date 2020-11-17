# kevin-miller-react-portfolio
My portfolio of projects.

<p>Check out the <a href='https://kevin-miller-react-portfolio.herokuapp.com/'>deployed website on Heroku servers</a>!</p>

<p>For a list of my various projects, go to the projects page in the portfolio, or check out <a href='https://github.com/Koldenblue'>my profile</a> here on GitHub.</p>

<p>I update this portfolio regularly. As such, my portfolio webpage is likely more polished than any other project I have worked on, in terms of front-end presentation.</p>

![image](https://user-images.githubusercontent.com/64618290/99360943-340d6380-2866-11eb-97aa-eb21e2641da2.png)

![image](https://user-images.githubusercontent.com/64618290/99360818-032d2e80-2866-11eb-9d7e-427f3cc6efc6.png)


## Discussion of this Portfolio Webpage

<p>This webpage is a portfolio designed to provide easy links to and an overview of all my various projects. My portfolio includes my resume, skills, and some additional information. See the deployed website to view the various projects.</p>

<p>This webpage was originally programmed in pure HTML / CSS, before being migrated to React. The <a href='https://koldenblue.github.io/kevin-miller-portfolio/'>older, out of date portfolio</a> was deployed<a href='https://github.com/Koldenblue/kevin-miller-portfolio'> using GitHub pages</a>. For this current portfolio, the React router is used to connect the pages on the site. Each individual page is split into various React components, as well. Several advantages were gained by the use of React. A good example is the navbar. The navbar is encapsulated within its own component, and is thus easily editable. Since each route on the site uses the same navbar component, any edits to the navbar are propogated to all routes. This behavior can be compared to editing the navbar in the original non-React portfolio, in which all pages on the site were vanilla HTML/CSS. In that case, since the navbar was coded separately on each HTML page, any changes to the navbar would have to be made to every single HTML file.</p>

<p>In addition to the obvious performance and organizational benefits, React has provided a neat way of thinking about programming. The ultimate goal is to have completely encapsulated components, which can then be easily transferred where needed. This has long been one of the main goals of object-oriented programming. Several components in this project are designed with the goal of encapsulation in mind - for example, I have already transferred the image zoom components in the '/portfolio' route to another project. I have transferred other React components between projects, as well.</p>

<p>React is fairly new technology - less than a decade old. However, my work on these websites, as well as additional research and reading, clearly indicate why React and similar libraries such as Angular are growing hugely in popularity. Not only do they offer performance benefits, but they offer a great way of thinking about best coding practices and code itself. </p>
