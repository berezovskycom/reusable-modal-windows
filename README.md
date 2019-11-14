# Reusable Modal Windows

Use this module to save up some time on creating fuctionality for Modal Windows, or anything that needs to be clicked & toggled.

## Download
You can download the module from the Github repo, or use [npm package](https://www.npmjs.com/package/reusable-modal-windows)

## Basic Usage

```html
<button openModal="some-modal-window">Open Modal!</button>

<div class="popup" modalName="some-modal-window">
    <p>Content...</p>
    <button closeModal="some-modal-window">Close!</button>
</div>

<script src="reusable-modal-window/index.js"></script>
```

```javascript
new Modal('your-classname-for-visibility-of-modal-window'); // e.g. popup--visible. js-is-visible is set by default
```
