# Crossing

A Ghost theme.

![Screenshot](screenshot.png?raw=true)

[Demo](http://crossing-ghost.barepants.com/) × [Download](https://github.com/barepants/crossing-ghost/archive/master.zip)


## Configuration

### partials/config.hbs

* `footer_links`: The links in the site footer. An array of `['Label', 'URL']`.
* `disqus_shortname`: Your Disqus shortname.


## Sass

Crossing uses [Gulp](http://gulpjs.com/), [LibSass](https://github.com/sass/libsass), and [Autoprefixer](https://github.com/postcss/autoprefixer) to build CSS.

### Setup

1. Install [Node](https://nodejs.org/download).
2. Install Gulp: `npm install --global gulp`
3. Run `npm install` to install dependencies.

### Gulp tasks

* `gulp sass`: Compile Sass files.
* `gulp watch`: Compile Sass files automatically when they change.
* `gulp`: Compile and watch.


## Syntax highlighting with highlight.js

Use fenced code block and specify the language like this:

    ```css
    body {
      display: none;
    }
    ```

The following languages are included by default: Apache, Bash, C#, C++, CSS, CoffeeScript, Diff, HTML, XML, HTTP, Ini, JSON, Java, JavaScript, Makefile, Markdown, Nginx, Objective C, PHP, Perl, Python, Ruby, SQL.

To customize or add more languages:

1. Go to https://highlightjs.org/download/.
2. Custom and download.
3. Unzip `highlight.zip`.
4. Copy `highlight.pack.js` to `assets/js/`.
5. Open `default.hbs`.
6. Near the bottom of the file, find and replace `//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.0.0/highlight.min.js` with `{{asset "js/highlight.pack.js"}}`

You can find out all language identifiers for fenced code block in this [CSS classes reference](http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html#language-names-and-aliases).
