Datetimepicker
==============

## Introduction

Class to create a Datetimepicker [xdan/datetimepicker](https://github.com/xdan/datetimepicker) with more options like date conversion on the fly :

* Timestamp to Fr
* Date US to Fr
* Timestamp to Us
* ...

## Requirements

* Datetimepicker 2.x : [xdan/datetimepicker](https://github.com/xdan/datetimepicker)
* jQuery >= 1.7.2 : [jquery](https://github.com/jquery/jquery)

## Installation

### With [bower](http://bower.io/) (RECOMMENDED)
`bower install datetimepicker_ozee`

In HTML or PHP page insert diffenrents scripts :
```
<link rel="stylesheet" href="bower_components/datetimepicker/jquery.datetimepicker.css">

<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/datetimepicker/jquery.datetimepicker.js"></script>
<script src="bower_components/datetimepicker_ozee/class.datetimepicker_ozee.js"></script>
```

### Or Download sources on GitHub
Copy "class.datetimepicker_ozee.js" file and "bower_components" folder into project

In HTML or PHP page insert diffenrents scripts :
```
<link rel="stylesheet" href="bower_components/datetimepicker/jquery.datetimepicker.css">

<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/datetimepicker/jquery.datetimepicker.js"></script>
<script src="class.datetimepicker_ozee.js"></script>
```

## Usage

`new OZEE.Datepicker('input_id', options);`

### Options :
Object Json : `{}`
- format : date format used in datepicker (default Fr format "d/m/Y H:i")
- formatBDD : date format used in database (default Us format "Y-m-d H:i:s")
- lang : datepicker language (default "Fr")
- [See all options](http://xdsoft.net/jqplugins/datetimepicker/)

## Examples

- Default value is a Date US "Y-m-d H:i:s" but display a date FR "d/m/Y H:i" in datetimepicker
`new OZEE.Datepicker('input_id');`

- Default value is a Timestamp but display a date FR "d/m/Y H:i" in datetimepicker
`new OZEE.Datepicker('input_id', {formatBDD:'timestamp'});`

- More exemples : see "index.html" and "demo.js"
