# Viewport_API
Inserting a page via iframe with correct dimensions

1. Plug **index_initer.js** to your **index.html**;
2. Add iframe tag with empty src attribute and id="iframe":
```html
<iframe id="iframe" frameborder="0"></iframe>
```
3. Init viewoprt:
```javascript
viewport.init('URL');
```
