# My Portfolio Site

The site is hosted at https://jaccet.github.io/portfolio/

## HTML

### Basic HTML Structure

Can be seen in the index.html file.

### HTML structure with clear content differentiation (headings, paragraphs, lists)

Content is separated to the header, body, and footer. The body is furher separated into sections.

### Use of forms, links, and media

Links are in index.html lines: 9, 82, 83, 84.

### Tables are not used

### HTML Semantics

Can be seen in the index.html file.

## CSS

### Basic CSS styling (colors, fonts)

For colors, look anywhere in the styles.css file. And for fonts, see line 115 in the styles.css file.

### Use of classes and IDs to style specific elements

Classes and IDs can be seen index.html lines, search the styles.css file with the class or ID names for the changes specific to the classes and IDs.

### No responsive design

### Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)

Contains flexboxes as can be seen in the site structure. The index.html file has almost named all flexbox classes with "flex-" prefix but not all of them.

### The prettyness of the site is dependant on the reviewer

## JavaScript Basics

### Simple interactions (like alerts on button click)

In script.js, the sayHello function (line:122) is called when the user clicks a project dropdown (see index.html, line:24).

### Multiple event listeners and basic DOM manipulations

Event listener on line 111 in script.js.

## Asynchronous Operations

### Use of timers

The aforementioned sayHello function is called from a three second timeout.

### Successful implementation of an AJAX call or Fetch

See fetchReadme function on line:18 for fetch implementation.

### Data from the asynchronous call is displayed on the webpage

The aforementioned fetchReadme function inserts the ReadMe from a GitHub page to a dropdown (try clicking the project on the page).

### Error handling is implemented (for failed API calls, etc.)

Use of try, catch in functions fetchReadme and toggleDropdown.
