Boostrap SquizNav
=================

This script moves items `nav` in `dropdown` if the container is not large enough.


Usage
-----

With Bootstrap 3.*

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
| `dropdown` | The empty template of the Dropdown: `<li class="pull-right dropdown"><a href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-triangle-bottom"></span></a><ul class="dropdown-menu"></ul></li>` | String | `< .. >` |
| `attribut` | Indexing attribute for `li` elements. | String | `data-index` |
| `delta` | Pixel width decremented from the container. | Number | `0` |
