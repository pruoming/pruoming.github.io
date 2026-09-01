# Lab Site Template

A responsive, seven-page academic laboratory website inspired by the clear structure of the Mo Li Group site at the University of Washington and recolored for HKU Mechanical Engineering. The template uses an original design and contains no copied laboratory text or photography.

## Pages

- `index.html` — group photo, short research synopsis, positions, and funding
- `research.html` — three concise research areas
- `people.html` — principal investigator, compact member list, and alumni
- `publications.html` — simple year-based selected-publication list
- `news.html` — short date-and-update list
- `gallery.html` — editable research and group photo grid
- `join.html` — minimal positions and enquiry details
- `css/style.css` — HKU Green, warm-gold, and ivory visual system with responsive layout
- `js/site.js` — shared navigation/footer, mobile menu, reveals, and publication filters

## Customize the template

1. Search all files for the remaining text inside square brackets, such as `[Member Name]`, and replace it with real information.
2. Update the shared laboratory name and contact links in `js/site.js`; the HKU ME affiliation and department address are prefilled.
3. Replace images by updating the files in the local `images` directory.
4. Keep image `width`, `height`, `alt`, and `loading` attributes when replacing URLs.
5. The palette uses official HKU Green (`#024638`) as its primary color. Keep any use of the official HKU shield or wordmark separate and compliant with HKU's identity rules.

## Local preview

Serve the `lab-site` folder with any static web server, then open `index.html`. A server is recommended because the template loads Google Fonts and remote placeholder images.

## Local structure

All site images are stored in the local `images` directory. Shared header and footer elements are injected through `js/site.js`; the website does not depend on third-party publishing assets or editor metadata.

Before enabling search-engine indexing, replace all placeholders, add real photos, verify external links, and review application/privacy language.
