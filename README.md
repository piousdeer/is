# @piousdeer/is
Type assertion helper with TypeScript support.
```js
export default function is(value, type) {
  if (typeof type === "string") {
    return typeof value === type;
  }

  return value instanceof type;
}
```

# Example
```ts
import is from "@piousdeer/is";

let a: unknown;

if (is(a, "number")) {
  console.log(a + 1);
}

if (is(a, Set)) {
  a.clear();
}
```