# Draggable card slider with infinite scrolling effect and autoplay

## HTML & CSS

## Sliding Images on Mouse move

## Previous & Next Button

- Add scroll behavior smooth for prev/next buttons
- Leave scroll behavior auto when dragging
- Center automatically the card when dragging
  - `overflow-x` and `scroll-snap-type`

## Infinite Scrolling Effect

- Make array of Carousel children which are `<li>` elements
- Get the number of cards that can fit in the carousel at once
- Add the last three cards at the beginning by reversing their order and the first three cards at the and
  - Insert copies of the last few cards to beginning of carousel for infinite scrolling
  - Insert copies of the last few cards to end of carousel for infinite scrolling
- automatically slide the carousel to the appropiate position if it reaches the left or right end

## Making Carousel Auto-play

- Autoplay the carousel after every 2500 ms
- Clear timeout on `mouseenter`
- Autoplay on `mouseleave`

source: YouTube.com/@CodingNepal
