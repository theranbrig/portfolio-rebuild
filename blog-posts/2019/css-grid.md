Originally Published March 15, 2019 for [FreeCodeCamp.org](https://medium.com/free-code-camp/gettin-griddy-with-it-build-your-own-css-grid-and-drop-the-frameworks-7d8c498c8b1b)

Just about every front end developer’s journey starts with the basic HTML, CSS, JavaScript path. You start with the structure, make it look decent, and then make it do something. However, somewhere along the journey it is easy to get caught up in the world of CSS frameworks and gloss over some of the finer details.

Bootstrap comes along with its nice pretty grid, using just a few classes and a CDN to make that nice pretty mobile-responsive grid. And before you know it, you start reaching for that framework whenever you build a project that needs a grid layout. I often did the same, that is until I started “Gettin’ Griddy With It.”

What sent me down the road of learning CSS Grid was when I was trying to build up a site using Semantic UI React (the prettier and less vague Bootstrap.) However, when building up a grid, I couldn’t make two columns sit flush with each other, and ended up messing with every margin and padding rule under the sun, to override the styles the framework had built in. It was frustrating experience, and I spent more time messing with specificity rules than actually coding.

That’s where CSS Grid comes in. CSS Grid is a relatively new addition to CSS3 and boy is it a doozy. Having to go to an imported grid framework leads to a few issues:

1.  Increased files size. The more you import the larger your app becomes. At a point when speed is key, reducing your app file size is an incredibly important idea to consider. Rather than importing a framework, or relying on a slow CDN, you can build your own.

2.  Less readable code. Those of you who have used a framework know the increasingly complex and vague class names that come along with it. Who doesn’t immediately recognize whatclass="col-6 col-md-4 col-sm-12" stands for? Or who wants to end up writing long lines of ambiguously named classes in their CSS?

3.  Less customization. The built in rules of a framework can be difficult to override. You may end up with long class names to get to the correct specificity, or end up with line after line of !important tags to create custom styles that override the framework. The magic of CSS Grid is that you can make your own, and customize it to your needs, rather than rely on others who didn’t have your project specifics in mind.

## A Responsive CSS Grid

CSS Grid is essentially a group of boxes that you can fit on a page. You can either use number units to size up the boxes, or relative sizes to make it more responsive. With the huge variety of screen sizes out there, this is a big plus. Let’s say that you want to create a layout of six divs and want them to be responsive with more columns for different screen sizes.

This is what it looks like unformatted as six divs in a container.

```html
<div class="big-box">
  <div class="content-area box1">
    <p>This is Box 1</p>
  </div>
  <div class="content-area box2">
    <p>This is Box 2</p>
  </div>
  <div class="content-area box3">
    <p>This is Box 3</p>
  </div>
  <div class="content-area box4">
    <p>This is Box 4</p>
  </div>
  <div class="content-area box5">
    <p>This is Box 5</p>
  </div>
  <div class="content-area box6">
    <p>This is Box 6</p>
  </div>
</div>
```

<img src="https://cdn-images-1.medium.com/max/5566/1*cSLRntIHmCMp_7_ny6aORQ.png" alt="grid basics" class="full-size-image"/>

Rather than having to add classes for each of the break points, you can set the minimum size of the div in a grid, and then autofill with bigger responsive boxes by using the fr sizing property. You only have to add CSS Grid properties for the parent, and then the small-box divs will fill in automatically.

The CSS for the container is as below:

```css
.big-box {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

Below you can see how the same code is responsive for mobile, tablet, and desktop views.

<img src="https://cdn-images-1.medium.com/max/2000/1*HIgyPXzE7rG8oqQH5eFbGA.png" alt="mobile grid" class="full-size-image"/>
<p class="photo-caption">Mobile View</p>

<img src="https://cdn-images-1.medium.com/max/3658/1*i_f847yDQqbM9chT4lPz9A.png" alt="tablet grid" class="full-size-image"/>
<p class="photo-caption">Tablet View</p>

<img src="https://cdn-images-1.medium.com/max/5044/1*LP7pngcVvqhgfbH-egw9eA.png" alt="desktop grid" class="full-size-image"/>
<p class="photo-caption">Desktop View</p>

As you can see, you can create a simple responsive grid from just four lines of code. Couldn’t be easier, and all of your content is free to move around and shuffle as needed. No media queries are even necessary in this instance. From here you are free to customize the individual boxes in the Grid. It’s quite flexible for responsive layouts and sizes. Play around with it and watch the boxes move magically.

## Grid Areas

The other reason that I would tend to reach for a framework grid was to use for various layouts on different devices. You may want components to move around, depending upon the screen size you are on.

Below is an example of site layouts that you may want on desktop and tablet. Changing this is quite simple. Though some don’t like the structure, you and use an ASCII-like templating structure for the Grid areas.

Let’s say that you have a basic page layout that has a header, sidebars, content and a footer.

```html
<div class="big-box">
  <div class="big-box">
    <header class="content-area header">
      <p>This is Box 1</p>
    </header>
    <aside class="content-area side-bar1">
      <p>This is Box 2</p>
    </aside>
    <aside class="content-area side-bar2">
      <p>This is Box 3</p>
    </aside>
    <main class="content-area main-content">
      <p>This is Box 4</p>
    </main>
    <section class="content-area about-section">
      <p>This is Box 5</p>
    </section>
    <footer class="content-area footer">
      <p>This is Box 6</p>
    </footer>
  </div>
</div>
```

<img src="https://cdn-images-1.medium.com/max/4010/1*USHn58dGLUlH6IhHBmULxg.png" alt="page layout" class="full-size-image"/>

The layout for the page without being formatted would look like this with a basic grid of three columns set to 1fr 4fr 1fr . The boxes will fill in to fit their allotted space within the grid. However if you want your page layout to be a more fluid and dynamic like below, you can use template-areas.

In order to get this desired layout you need to create template areas. You can think of it as a miniature ASCII map that shows where you want the boxes to go on a page.

In order to get the desktop layout you make your miniature map like in the grid-template-areas property. Each line holds a row and names for the corresponding columns for the layout. You can see that the header and footer sections will stretch along the entire columns that they are placed in. Also sidebars and content stretch across multiple rows, as you can see in the “map” area. This can then be made into any layout that you need by adding the grid-area property to the corresponding divs like on the far right picture. You can name these anything that corresponds to your project.

<img src="https://cdn-images-1.medium.com/max/4068/1*k1ZpLklxjMzCafnhcd5lhw.png" alt="page layout" class="full-size-image"/>

```css
.container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 100px 100px 100px 50px 100px;
  grid-template-areas:
    'header header header'
    'side-bar1 main-content side-bar2'
    'side-bar1 main-content side-bar2'
    'side-bar1 about side-bar2'
    'footer footer footer';
}

.header {
  grid-area: header;
}

.side-area1 {
  grid-area: side-area1;
}

.side-area2 {
  grid-area: side-area2;
}

.main-content {
  grid-area: main-content;
}

.about-section {
  grid-area: about-section;
}

.footer {
  grid-area: footer;
}
```

In order to make it work on tablet view you simply need to make a media query and switch around the order in your template areas. Easily move around content for your desired view. (Note that this can lead to problems on screen readers if you have content out of order, so be sure that your content still reads logically.)

<img src="https://cdn-images-1.medium.com/max/2514/1*6YvUv2MK17JTIhpgJx1EEA.png" alt="page layout" class="full-size-image"/>

```css
@media (max-width: 720px) {
  .container {
    grid-template-areas:
      'header header header'
      'side-bar1 main-content main-content'
      'side-bar2 main-content main-content'
      'side-bar2 about about'
      'footer footer footer';
  }
}
```

## Conclusion

This simple post definitely just scratches the surface of what you can do with CSS Grid. But I think the main thing to take away from this is that you shouldn’t be afraid of using CSS Grid. It really is quite simple, powerful, and lightweight once you get use to the new syntax. Go ahead and enjoy “Gettin’ Griddy With It.”

For more information on CSS Grid I highly recommend checking [http://cssgrid.io](http://cssgrid.io.) taught by Wes Bos. It is a fantastic tutorial CSS Grid.

Also as you have questions be sure to check out the CSS Tricks site at [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/) to learn more about the grid.
