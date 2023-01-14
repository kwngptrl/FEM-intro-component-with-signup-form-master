# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Screenshot Desktop](./Screenshot-desktop-202301-13.png)

![Screenshot Mobile](./Screenshot-mobile-202301-13.png)


### Links

- Solution URL: [Solution URL here](https://github.com/kwngptrl/FEM-intro-component-with-signup-form-master)
- Live Site URL: [Live site URL here](https://kwngptrl.github.io/FEM-intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This seems like a straightforward project to code. It becomes tricky if the inputs are invalid. I was reading and watching videos on form validation with JS. A lot of them were similar. I had a concept as to how it was to go when I stumbled upon someone by the name of codebubb on YouTube. His video on form validation using JS was just what I had in mind and I decided to borrow it for this challenge. I adapted it and kept most his code so if others want to look at it, they can. I'll also put a link down below to his site and YT channel. 

One thing that put me in a pickle was accessibility. I found Austin Gil's blog post on this (link below) and used some of his CSS. Since this Frontend Mentor project had hidden labels with placeholders in the input boxes, using codebubb's code meant that I had to populate the label tags with the field names, but render them hidden. Or, do away what was in between the label tags and use JS to obtain the value of the placeholder and put it in the error messages. I wasn't sure which was the better way or good practice, so I left the code with some comments for future me.

### Continued development

I'll probably have to study more about accessibility. Seems a lot to learn there. Also, in codebubb's video he used Tailwind and I coded along, I got a nice lesson about it, albeit beginner level but I kinda liked it, and might use it in the near future for other projects, or even remake this one.

### Useful resources

- [The BEST way to do form validation in JavaScript](https://www.youtube.com/watch?v=iyngFd6f8ko) - By codebubb. This is more on the intermediate level, but still accessible to everyone. A good watch.
- [GitHub repo](https://github.com/codebubb/javascript-form-validation-tutorial) - The GitHub repo for the above video.
- [How to Build HTML Forms Right: Accessibility](https://austingil.com/how-to-build-html-forms-right-accessibility/) - By Austin Gil. Part 2 of a five-part series. More info and good practice tips here.

## Author

- Frontend Mentor - [@wannacode](https://www.frontendmentor.io/profile/kwngptrl)

## Acknowledgments

Again, codebubb aka James Bubb for the JS form tutorial and Austin Gil's blog about building forms the right way. The links are just above.