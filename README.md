# My Portfolio

## About the Project

This is my first personal portfolio website, created as part of my studies at Chas Academy. Through this project I've learned a lot about HTML, CSS, and vanilla JavaScript — and gotten my first real experience turning a design idea into working code.

My design vision was a sleek, editorial aesthetic: clean typography, generous spacing, and a calm color palette that lets the content do the talking.

## Built With

- HTML
- CSS
- JavaScript

## Features

- **About Me** section with a typing animation that cycles through my roles, plus a "Read more" feature to reveal extra detail without cluttering the page
- **Skills** section describing the tools and skills I'm developing through my education
- **Projects** section with cards that use a pop-up animation on hover
- Links to my email, GitHub, and LinkedIn
- Hover effects and keyboard navigation throughout

## Responsive Design

I used CSS media queries to make the layout scale across different screen sizes.

## Running the Project

1. Clone or download the repository.
2. Open the project folder in your editor.
3. Open `index.html` in your browser, or use the Live Server extension for live reloading.

## Feedback and Improvements

In the code review, I got feedback that I was using too many generic `div` elements instead of semantic HTML, and that my navbar wasn't actually functional. I fixed both: I went through the whole structure and replaced `div`s with semantic elements like `article` and `section`, and I made the nav links actually functional so they scroll to the right section. I also added more comments throughout the code to make it easier to follow, both for others and for myself later.

What I chose to skip for now was fully building out the "View all works" page — I don't have enough projects to fill it yet, and I'm still unsure what the layout should look like, so I prioritized getting the core structure and accessibility solid instead.

The hardest part of this project was building the interactive pieces — the typing animation in the hero section and the "Learn more" text expansion.

## Future Improvements

- Finish the "View all works" page once I have more projects and a clearer layout idea
- Keep refining responsiveness, especially at extreme zoom levels
- Add a photo of myself to the intro section