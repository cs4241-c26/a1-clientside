Assignment 1 - Client-side Development: Basic Deployment w/ Git, GitHub, Render
===

*DUE: Sa 1-24-2026 at 11:59pm*  

First assignment! You will deploy the starting Web site that you will use this term to [Render](http://www.render.com/). 

Treat this assignment as a chance to get up to speed on Git, GitHub, and Render, as well as experiment some with HTML/CSS/JavaScript. If you already know these, great! 
However, if you're new to them, spend several hours practicing, experimenting, and reading documentation. Don't just get your website up and done, as
you'll need skills with these tools throughout the rest of the course.

PAY ATTENTION TO THE NAMING AND URL SCHEME REQUIREMENTS. This is where students often lose points on this assignment.

Assignment details
---

This assignment requires that your website is both contained in a GitHub repository and hosted in Render.

1. Fork this repo and clone it to your computer
2. Make changes locally on your computer
3. Push the repo onto GitHub
4. Create a Web Service using Render.

Detailed Requirements

1. Fork the starting project code in GitHub. This repo contains:
    * the server code, `server.js`
    * A starting `index.html` file that you will edit as described below
    * A blank `styles.css` file where you will include your CSS styles
    * A package.json file 
    * This README
2. Using the JetBrains Webstorm IDE, edit `index.html` to show the following information about you:
    * your name and class at WPI (e.g. class of 2026) Note: Do not put any contact or personal information that you do not
      potentially want other people outside of this class to see.
    * your major(s) and minor(s)
    * a list of previous computer science courses that you have taken at WPI
    * a table containing your experience with the following technologies and methods (none, some, a lot)
        * HTML
        * CSS
        * JavaScript/Typescript (specify which one)
        * SQL (specify which ones)
        * MongoDB
        * Web Frameworks (specify which ones)
        * unit testing
3. Create `hobby.html` to show one of your interests:
    * use two of the HTML5 semantic block elements - main, section, article, aside, header, footer
    * create a form related to your hobby (such as asking readers to provide information about their interests) that include
      the following the following form elements
        * input text box
        * text area
        * check boxes
        * radio buttons - note that the radio buttons should permit only a single selection!
        * a drop down selection list
        * labels for each of the elements above
        * a submit button with no action (the button does not do anything for now)
4. Add hobby.html to server.js
5. Using the <nav> tag and unordered lists as mentioned in class, create the following horizontal navigation menu at the top of
   the `index.html` and `hobby.html` documents. You will want to research the a: pseudo classes, such as a:hover, to create
   styles in styles.css for the four menu selections:
    * Link to `index.html`
    * Link to `hobby.html`
    * Link to WPI's home page
    * Link to an informative web page related to your hobby
6. Add the following styles to styles.cc
    * h1
    * h2
    * ordered lists
    * unordered lists
    * navigation menu selections. You will want to research the a: pseudo classes, such as a:hover, to create these styles
7. Complete some technical and/or design achievements (see below)
8. Test your project to make sure that when someone goes to your main page, it displays correctly. You can do this locally by
   simply running `node server.js` from within the assignment directory.
9. Modify the README file according to the specification below.
10. Commit and push all your changes to GitHub. 
11. Ensure that your project has the proper naming scheme (guide follows below this section) so we can find it.
12. Create a Web Service on Render to deploy your project - see deployment instructions included with Canvas Assignment 1 
    and in the [Render Docs](https://render.com/docs/github)

Naming and URL Scheme
---
You must use a consistent naming scheme for all projects in this course.
The naming scheme should be `a1-LastnameFirstname`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future projects.

If we can't find it, we can't grade it.

Achievements
---
Below are some suggested technical and design achievements. You must implement at least one from each category to boost 
your grade up to an A and customize the assignment to your personal interests. These are recommended achievements,
but feel free to create/implement your own. Uust make sure you thoroughly describe what you did in your README and why it 
was challenging. ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM.

Note that if you want to load resources besides your index.html file (images or a JS file) you'll need to modify 
server.js to point to these. For now it's easiest to just hardcode paths to the resources, but we'll look at ways to optimize 
this shortly.

*Technical*
1. (5 points) Add a gridpane for your form. You will need to research how this is done so the labels and the input elements line up nicely.
2. (5 points) Add a flexbox for your nav bar
3. (max 5 points) Experiment with additional *semantic* HTML tags (links, images, tables, header, footer, etc.) Each extra
   semantic tag beyond the two required ones will get you 1 extra point for a maximum of 5 points. Be sure to list the
   semantic tags you use in your README.

*Design*
1. (5 points) Create a color palette using [color.adobe.com](https://color.adobe.com). Use all the colors in the palette
   in your webpage by implementing the appropriate CSS. Add a small screenshot of the color wheel for your color palette
   to your repo.
2. (5 points) Use a font from [Google Fonts](https://fonts.google.com) in your website.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [HTML & CSS](https://wpi.primo.exlibrisgroup.com/discovery/fulldisplay?docid=alma9936730811904746&context=L&vid=01WPI_INST:Default&lang=en&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,Jon%20Duckett&offset=0) 
and/or [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript).

If you need a Git/GitHub refresher, see the GitHub document posted on Canvas and the Learning Git textbook. Addition 
references that may be useful are [GitHub Bootcamp](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) 
(especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Sample Readme (delete the above when you're ready to submit, and modify the text below with your links and descriptions)
---

Last Name, First Name: Render link

This project shows ...

## Technical Achievements
- **Styled page with CSS**: Added rules for the p, h1, li, and table selectors...

### Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Roboto as the font for the primary copy text in my site.
