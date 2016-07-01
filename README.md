# jquery.getBackgroundSize.js

## import

```html:import
<script src="scripts/jquery.getBackgroundSize.js"></script>
```

## Basic Usage
Pass callback as an argument.

```js
$(this).getBackgroundSize(function(arg){
    console.log("width:" + arg.width);
    console.log("height:" + arg.height);
}));
```

```js
var callback = function(arg){
    console.log("width:" + arg.width);
    console.log("height:" + arg.height);
})

$(this).getBackgroundSize(callback);
```

## Referring to Selected Element

Selected Element is assigned in "this".

```
$(function(){
  $('#sample-auto-cover').getBackgroundSize(function(arg){
    $(this).before('<table class="table">' +
      '<tr><th>width</th><th>height</th></tr>' +
      '<tr><td>' + arg.width + '</td><td>'+ arg.height + '</td></tr>' +
      '</table>');
  });
});
```
