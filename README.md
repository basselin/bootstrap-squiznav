Boostrap SquizNav
=================

This script moves items `nav` in `dropdown` if the container is not large enough.

![SquizNav](http://github.161.io/bootstrap-squiznav/demo.gif)


Usage
-----

With Bootstrap 3.3.*

```html
<script src="squiznav.min.js"></script>
<ul class="nav nav-tabs" data-squiznav="">
    <li><a href="#">Menu 1</a></li>
    <li><a href="#">Menu 2</a></li>
    ...
```

```html
<script src="squiznav.min.js"></script>
<script>
$(function() {
    $('.squiz-me').squizNav();
});
</script>
<ul class="nav nav-tabs squiz-me">
    <li><a href="#">Menu 1</a></li>
    <li><a href="#">Menu 2</a></li>
    ...
```


Options
-------

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `dropdown` | The empty template of the Dropdown. | String | `<li class="pull-right dropdown"><a href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-triangle-bottom"></span></a><ul class="dropdown-menu"></ul></li>` |
| `attribut` | Indexing attribute for `li` elements | String | `data-index` |
