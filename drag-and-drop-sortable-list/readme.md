# Drag and Drop Sortable List

- Adding dragging class to item after a delay (setTimeout 0, `dragstart` event)
- Removing dragging class from item on `dragend` event
- Getting all items except currently dragging and making array out of them
- Finding the sibling after which the dragging item should be placed
  - `clientY`
  - `offsetTop`
  - `offsetHeight`
