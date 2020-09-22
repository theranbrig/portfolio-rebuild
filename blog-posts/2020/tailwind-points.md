"Oh great. Another CSS framework. Who needs one when I just write all of my CSS from scratch?"

This was the first thought that went through my head when I was recommended to checkout Tailwind by a colleague.

After all I had been writing all of my own CSS without a need for Bootstrap grid, and I had mastered StyledComponents. But I decided to check it out for a new project, and I ended up liking it quite a bit.

It has been about three months since I started using Tailwind.css in my projects. Clearly, if I have been sticking with it for this long, I definitely see the value in it, but there are a few pain points that go along with it.

Below are some of the great parts, and the weaknesses that I have found in my time using it.

## **_Awesome Sauce_**  - What's Great

### Fewer Ambiguous Class Names

Tailwind helps to eliminate the need for ambiguous class names like `paragraph-container`. Tailwind uses clear declarative naming for the classes, so what you see is what you get. It gets to be time consuming having to look back through my css in order to see what css was actually applied to the classes. Rather, Tailwind uses a system like `border-2 border-blue rounded-lg bg-green`. From that you can pretty much see that there is a 2 px blue border that is rounded and has a green background.

Some scoff at the idea of long class names and that they clutter up the html. Plus don't even start on the no CSS in JS crowd. But I find it actually gives me a better development experience to not have to look back and forth between files. I can see the styling that is already present in that tag. I can easily see what classes I am applying, and what styling is taking place, rather than having to guess what the difference is between `responsive-paragraph-container` vs. `paragraph-container`.

Plus if you really dislike the long names. You can still apply all of the styles in your css file the old fashioned way.

You can keep `paragraph-container` as:

```css
.paragraph-container {
  @apply border-2 border-blue rounded-lg bg-green;
}
```

This is also the way that you would build out reusable styling classes for components as well.

Both naming approaches work for whatever style you prefer.  One of the callings of good code is that it is explicit and expressive in it's meaning.  Tailwind allows you to take whichever approach you thing accomplishes this.

### Standardization and Theming

Working with designers and building out a design system is one of my favorite parts of application building. But, creating standards and having to build out variables is not. Luckily Tailwind makes this easy. You can use the defaults `p-4 lg:p-32`, or use custom variables, so you can create `p-mobile lg:p-desktop`.

Coloring is a dream as you can create your own color palette and access it an any color element. You can overwrite their colors, or extend it with your own.

Working with widths is great if you are using percentages, as it uses a numerator/denominator system based upon 2, 3, 4, 5, 6 and 12. So you can enter in `w-8/12`. For fixed widths I have tended to use custom variables, as the Tailwind ones are based upon REM Units, [and is something I touch on later](#Confusing-Units).

### Write Better CSS and Classes

Using Tailwind has gotten me to write better classes and better CSS overall. I remember first learning bootstrap and wondering why you had to include `btn` and `btn-red`. However, using Tailwind had gotten me to realize why it is important to build out your CSS like you do components in React. Take a look at the following example:

```css
.btn {
  @apply px-8 py-2 text-lg rounded-lg shadow-sm;
}

.btn:hover {
  @apply shadow-lg;
}

.btn-orange {
  @apply text-black bg-orange;
}

.btn-orange:hover {
  @apply bg-orange-700;
}

.btn-green {
  @apply text-white bg-green-300;
}

.btn-green:hover {
  @apply bg-green-700;
}
```

This has lead me to really adopt what they call a utility first design pattern. Looking at the above code, my `.btn` class defines the shape and size of my buttons. Then the color classes are just doing that, only applying color. This allows me to focus on those as two separate aspects. Following this pattern has made me write cleaner and more expressive CSS. It is a pattern I have tried to follow whether using Tailwind or just vanilla CSS.

This is all to say, that this pattern was not invented by Tailwind, but their terrific documentation makes it clear why you should practice it.

### Mobile Responsive First

If you are like me I can never remember how to properly write a media query. Is it max-width or min-width? What are the break points? Luckily, tailwind makes this super easy. You start with the mobile styling as your base, and then you add on queries to fit larger screens.

So if you start with `flex flex-col lg:grid lg:grid-cols-3`, you now have flexbox columns on mobile, while grid for your desktop views. I honestly couldn't tell you the last time I wrote a media query. This is probably my main selling point on Tailwind so far. Any class can be added to your breakpoints.

### Community

The Tailwind community is really growing, and something that I really enjoy. There are so many resources that help you to build beautiful components.

This repo has tons of resources:

[Awesome TailwindCSS](https://github.com/aniftyco/awesome-tailwindcss)

## **_The Meh_** - Some Pain Points

Not everything is perfect. Here are some of the pain points I have run into.  I realize that all of these have workarounds, but they are things I would fix in a perfect world.

### Units

I talked about this one before, in that Tailwind uses REM units. I know that they are based up a math formula of unit / 4 = rem size, but it is something I constantly have to keep in mind a calculate in my head.  It is also frustrating if you are working with a design team that gives things in pixels.  Ends up with a lot of math.

Plus for fixed width items you can only go up to about 16 REM. This is about 256 pixels.  I realize that there is no way for Tailwind to include every pixel width, and that it makes sense to only cover most use cases, but I have found it to be a pain, if you do have fixed width items, and you have to define those custom widths.

Luckily most design these days eschews these ideas, and focuses on responsive design, so it is not as big of an issue as the past.

### Limited Options on Some CSS

I realize that typically height is not as often defined as it is for width, but it would be nice to have the option.  They only have heights for the fixed REM heights, auto, 100%, and 100vh.  It would be nice to have those percentages in there like they are for width, as an option for when they are needed.

This also applies to grid.  You can only have grid columns or rows that are equal width.  If you want a custom grid, it needs to defined.  I realize that it again impossible to add everything needed and defined, but it is an issue I have run into.  Luckily, I use Grid less these days, and flexbox more.

### Webkit and Unpopular CSS

Some of my specific SVG CSS properties that I needed on a recent project were not available in Tailwind, which means that it ends up going into the custom CSS file.  This also goes along for things that are `-webkit` as these can not be specified.  If you need to develop for iOS Safari, this ends up becoming a big pain point.  But that is probably more of an issue with Safari that Tailwind.

These again are not properties used by every developer, but they are issues I have run into, and something that others might want to be aware of for certain development cases.


## Conclusion

I really thought that as I was planning this out, that I would have a balanced article that fairly weighed out the pros and cons.  What I realized as I got to the end, is that all of my negatives were not really that big of an issue.  They are really relatively minor things, and all can be worked around by extending it to fit my specific design needs.

Overall Tailwind has made my CSS more organized, expressive, and faster.  I think it is definitely an approach I would test out if you haven't done so already.
