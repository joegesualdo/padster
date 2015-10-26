## Padster
> Pad a number

## Install
```
$ npm install --save padster 
```

## Usage
```javascript
var pad = require("padster")

pad(80, 6, "-")
```

## API

### `pad(number, size, paddingChar)`

| Name | Type | Description |
|------|------|-------------|
| number | `String or Number` | The number you want to pad 
| size | `Number` | The length (or amount of padding) you want the result to have
| paddingChar | `String` | The character you want to padd the number with 
