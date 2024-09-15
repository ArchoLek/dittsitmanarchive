
# dit.tsitman.com template with TailwindCSS

This project is a simple and responsive course platform template built using **HTML** and **TailwindCSS**. No external stylesheets are used, making development fast and efficient. All styling is done directly through **TailwindCSS** in the HTML files. This repository contains the design components and styles used for dit.tsitman.com. Please note that no exam templates or any other sensitive content is included here. This repo is made public to showcase and share the frontend design elements for educational and reference purposes.

## Directory Structure

```
project-directory/ 
├── assets/ -- where images should be stored
│   ├── chapter1/ -- where images of chapter1 should be stored
│   ├── chapter2/ -- where images of chapter2 should be stored
│   └── chapter3/ -- where images of chapter3 should be stored
│    +++
├── index.html -- landing page
├── terms.html -- terms of service page
└── main.js
```

## How to Use the Template

### Uploading Files

1. Upload your files or other course materials into the corresponding chapter folder within the `assets/` directory. For example:

   ```
   /assets/chapter1/filename.pdf
   ```

2. Update the chapter button link in the HTML to point to the correct file. For example:
GO-to (/chapters/N), n: chapter number 
Change the filename.pdf to the file you uploaded and the chapter1, to the chapter 
   ```html
   <button onclick="window.open('assets/chapter1/filename.pdf')">Introducion to Programming [2023]</button>
   ```

### Changing a Chapter Button

1. Open the HTML file where the chapter button is located (e.g., `index.html`).
2. Update the `onclick` attribute to point to the correct file location. Example:

   ```html
   <button onclick="window.open('assets/chapter2/newfile.pdf')">Chapter N</button>
   ```

### Changing animated texts

1. Open the JS file where the main file is located (e.g., `main.js`).
2. Update the `"descriptions"` from there:
   ```js
    const texts = [
        "Fully customizable template.",
        "Responsive design for all devices.",
        "Fast and lightweight."
    ];
   ```
   
### Customizing Button Colors

You can change the button colors by modifying the TailwindCSS utility classes directly in the HTML file. Available states:
- Active Chapter Button: `bg-yellow-400`
- Idle Chapter Button: `bg-gray-500`
- Red Chapter Button: `bg-red-600`

For example:

```html
<button class="bg-yellow-400 text-white">Lesson 1 Notes</button>
```

## Deployment on Netlify

To deploy the platform on Netlify:

1. Create a **Netlify** account or log in.
2. Click **New site from Git** in your Netlify dashboard.
3. Connect your GitHub repository containing the HTML files.
4. Deploy your site.

Once deployed, Netlify will provide you with a live URL where your course platform can be accessed.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
