type AnyConstructor = new (...args: any[]) => any;
export default function is<T extends AnyConstructor>(value: unknown, type: T): value is InstanceType<T>;

export default function is(value: unknown, type: "string"): value is string;
export default function is(value: unknown, type: "number"): value is number;
export default function is(value: unknown, type: "bigint"): value is bigint;
export default function is(value: unknown, type: "boolean"): value is boolean;
export default function is(value: unknown, type: "symbol"): value is symbol;
export default function is(value: unknown, type: "undefined"): value is undefined;
export default function is(value: unknown, type: "object"): value is object;
export default function is(value: unknown, type: "function"): value is Function;

export default function is(value: unknown, type: string | AnyConstructor) {
  if (typeof type === "string") {
    return typeof value === type;
  }

  return value instanceof type;
};
