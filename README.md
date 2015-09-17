# In Viewport

Compares a specified pixel value with the current window width.

## How to use

Define your viewports:

```javascript
var viewport = new inViewport();

viewport.setViewports({
    'mobile': 586,
    'portrait': 768,
    'desktop': 1024
});
```

There are several ways to ask for your viewport:

```javascript
viewport.is(200.5);
viewport.is('<=500px');
viewport.is('<portrait');
```

## Methods

- **is(String|Number)**: returns ``true|false`` if the current window width accords to the given param
- **setViewports(Object)**: expects a object with viewports (see example ahead)
- **addViewport('String', number)**: Adds a new viewport to the viewport set
- **getViewports()**: Returns a object with all defined viewports