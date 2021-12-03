I could write functions for iterateing,deleting and inserting to reuse them later but i don't know where this code is going to scale so i just wrote shortest and cleanest code.

I added two more test functions to cover non-existing folders and files.

ESLint giving regenerator-runtime error because of the airbnb's eslint rules. regenerator-runtime gives poor performance on older browsers that uses older javascript standarts but this code is not going to work on browsers. So i think we can ignore it.
More info https://github.com/airbnb/javascript/issues/1271
If you are asking about why I'm insisting about for-of loop: Throwing exceptions inside iterators (foreach,map) are hard and we are not able to break inside iterators.
If you want a iterating and error-free version of this ,check version2 branch.

## Lint the code

```bash
yarn lint
```

## Running tests

```bash
yarn test
```

## Format the code

```bash
yarn format
```

## Build the code

```bash
yarn build
```
