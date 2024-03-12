#

## HTML & CSS

- `white-space`

## Making Carousel Responsive

- using @media queries

## Sliding Images on Mouse move

- Slide only if somebody clicks the mouse button down and moves the cursor
- Preventing Default behavior of img dragging (not working on Safari? on Firefox have to use draggable='false')
- scrolling images/carousel to left according to mouse pointer
- Adding dragging class to carousel on mouse move and removing this class on mouse up
- Stop sliding when mouse leave carousel

Properties used

- `pageX`
- `scrollLeft`
- `pointer-events: none`

## Prev/Next Buttons

- Slide images according to prev and next icon click
- getting first img width & adding 14 margin value
- if clicked icon is left, reduce with value from the carousel scroll left, else add to it
- create `showHideButtons()` function
  - If the carousel scroll left value is 0 then hide the prev icon, else show it
  - use setTimeOut()
- Hide next icon if ther is no image to scroll

Properties used:

- `clientWidth`
- `scrollLeft`
- `scroll-behavior`
- `scrollWidth`

## Making Carousel Touch Friendly

- `touchstart`
- `touchmove`
- `touchend`
- `touches`

## Auto Sliding Middle Image to the Center

- create autoSlide() function
- make positionDiff value a positive number
- If user positionDiff is greater than 33% of image width then add difference value to the scrollLeft else reduce positionDiff from it
- if there is no image left to scroll then return from here
- create isDragging variable - it should only be true if user start dragging otherwise it is false & autoSlide function won't call
