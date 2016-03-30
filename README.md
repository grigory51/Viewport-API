# Viewport_API
Inserting a page via iframe with correct dimensions

1.Plug **index_initer.js** to your **index.html**
2.Add iframe tag with empty src attribute and id="iframe":
```html
<iframe id="iframe" frameborder="0"></iframe>
```
3.Init viewoprt in **index.html**:
```javascript
viewport.init('URL of project that you will upload via iframe');
```
4.Plug **iframe_initer.js** to html-file with project that you will upload via iframe (e.g. **iframe.html**)
5.Init viewoprt in **iframe.html**:
```javascript
iframeParent.init('URL of parent frame');
```
