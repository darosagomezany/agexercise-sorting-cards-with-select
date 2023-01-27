<!--hide-->
# Sorting Cards using the selection algorithm
<!--endhide-->

The "Selection Sorting Algorithm" is also another simple example of how computers work when sorting the list of things. [Here is a 5 min explanation on how the selection algorithm works](https://www.youtube.com/watch?v=g-PGLbMth_g)

https://github.com/breatheco-de/exercise-sorting-cards-with-bubble/pull/3

## 🌱  How to start this project

Do not clone this repository.

The first step to start coding is cloning the [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) on your local computer or opening it using gitpod.

a) If using Gitpod (recommended) you can clone the boilerplate by [clicking here](https://github.com/4GeeksAcademy/vanillajs-hello).

b) If working locally, type the following command from your command line: `$ git clone https://github.com/4GeeksAcademy/vanillajs-hello`.

💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.


## 📝Instructions

1. Create a function that generates a list of random cards with suits.
1. Let the user specify how many random cards the website should generate using a text input.
2. Add a "draw" button that when clicked it renders those cards on the website in a beautiful way.
3. Add one "sort" button that sorts the cards using the `selection` sorting algorithm.
4. Save all the changes that you had to do while sorting the list of cards in a new array.
5. Display the entire log of changes, one on top of the other.

This is an example of how your application should look:

![Bubble Sorting Cards on a website](https://github.com/breatheco-de/exercise-sorting-cards-with-select/blob/master/preview.gif)

## 💡 Hint:

1. Strategize first, no one starts coding the solution before having a clear strategy.
2. Stick to your strategy, forget about Stack Overflow for strategy.
3. Divide and conquer, try separating the exercise in smaller exercises, for example:
    - Make the hardcoded CSS and HTML before trying to make it dynamic, that will give you a clear sense of what HTML code you need to build with your algorithm.
    - Generate an array of random cards first, and make sure is properly being generated (using the console.log) before trying to render it into the website.
    - Make a function just for building the HTML of ONE card,a nd then re-use it to render all.
