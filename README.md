# my-helpers
> Still documenting :)

## Install

```sh
$ npm install my-helpers --save
```

## Usage


```js
import helpers from 'my-helpers';
```

or

```js
import { jwt } from 'my-helpers';
```

```js
// jwt.encode('secret_key', payload)
const createToken = await jwt.encode('secret_key', {name: 'user name'});
```

```js
// jwt.decode('secret_key', token)
const varifyToken = await jwt.decode('secret_key', token);
```

> MIT © GitHub
> [bhsoyket](https://github.com/bhsoyket)