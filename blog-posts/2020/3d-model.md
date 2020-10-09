Adding a 3D model is super easy and can be added to any project in just a few minutes. This is provided that you have a 3D model. In addition, you can also utilize AR on mobile devices with just a few extra steps. Below I'll explain how to get and running in no time.

One awesome element built by Google is model viewer which can be found at https://modelviewer.dev. It is built upon Three.js and allows you to easily add 3D WebGL models to any page. Though the instructions are on the site.

I'll offer a brief rundown of my experience with it and hopefully give you some pointers to not get stuck where I did.

It can either be imported with a CDN in your header with:

```html
<script
  type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
></script>
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
```

Or it can be done by using an NPM package by:

```bash
npm i @google/model-viewer
```

You can then import it via:

```js
import '@google/model-viewer';
```

Google recommends using the CDN as the project is still a work in progress and new features are being added quite often. It ensures you have the latest version always running.

One issue that I ran into with imports is that when using a SSR framework like Next.js you might have to use dynamic imports for the model viewer components. Make sure to set them to SSR false for these type of frameworks.

Once you have this all imported you can simply add a `model-viewer` tag and be on your way.

```html
  <model-viewer
    src={../Link/To/Model.gltf}
    ios-src={../Link/To/Model.usdz}
    alt='model name'
    ar
    loading='lazy'
    camera-controls
    poster={../Link/To/Image.png}
    autoplay>
  </model-viewer>
```

In this case this would be basic animated model that starts the animation automatically.  You can go through the docs on https://modelviewer.dev, for a more detailed explanation.

You can use either local models, or ones hosted on something like S3.  One problem that I ran into was using files on Firebase Storage.  They sometimes have CORS problems, and it is an open issue on GitHub.

You will need at GLTF or GLB model in order for this to work.  If you have another model type, there are converters that can be found online to get the right model type working.

This will also allow you to use AR on Android as it will open up in Android's Scene Viewer.  If you want AR on iOS you will also need a second model type called USDZ in order to use AR Quick Look.

You will also need to find a converter for using this type. Apple does have a program that is free to download and will do this for you if you have an iOS developer account.  It is called Reality Converter.

If you are not using AR, you can disregard the `ar` and `ios-src` attributes in the code above.

It is really that easy to get it up and running.  The hard part is making a cool model to go into your site.  That part I will leave up to you.
