# Portfolio Website

https://jamesriall.co.uk

## The Project

The site has been built with the aim of being a place for showcasing my front-end development project portfolio, demonstrating my front-end development skills further, and also acting as an online CV. The site provides an overview of who I am and where I am on my coding journey, a summary of the key skills and technologies I have experience in, and provides graphical links and descriptions of the various projects I have built to learn these technologies. It also includes links to my social networks, GitHub and CodeWars profiles, as well as the ability to email me through the site.

![ScreenShot](http://res.cloudinary.com/jamesriall/image/upload/v1513605313/portfolio-image_mw62fd.png)

## The Logic

My portfolio website is built using HTML5 and CSS with SCSS as a pre-processor. No frameworks was used for the CSS or mobile responsiveness in order to demonstrate responsive design skills using vanilla HTML and styling without the aid of a framework like Bootstrap. File structure of the SCSS has been carefully thought through for easy development, scaling and updating with a base folder (base colors, fonts, typography as well as a reset file), a helper folder (mixins, variables, functions), and components which are broken down by each section of the site.

The site was built with Gulp as a task runner, which I have set up to run a watch on the sass files, and browserSync for automatic updates of the page as I code. The build task cleans the production folder and then runs useref to parse and combined the build files in the HTML file, updates the css files from the scss in the source directory, uglifys HTML/CSS/JS files, minifys font, image and video files, clears the cache, as well as transfers the CNAME file to the production folder.

THe jamesriall.co.uk domain name was registered with GoDaddy, the code is hosted as a Github site and the CNAME file redirects to the Cloudflare hosted domain for added secure https support.

Various interactive features responding to user input such as where the use has scrolled to on the page have been added to the site without the use of a library like jQuery in order to demonstrate the ability to code using vanilla JavaScript. The email function was built with a macro which posts a message to a Google form I have set up with email alerts going through to my personal Gmail account.