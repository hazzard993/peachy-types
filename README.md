# Peachy Types

Declarations for [peachy](https://github.com/josh-perry/peachy), a parser/renderer for Aseprite animations in LÖVE.

Declarations can be used with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

```sh
yarn add josh-perry/peachy
# import the peachy module

yarn add -D peachy-types
# import typings for peachy (dev only)
```

> Add this to your `conf.ts` to help Lua find the `peachy` module.
> ```ts
> package.path += ";node_modules/peachy/?.lua";
> ```
>
> This should resolve to `peachy` and all its dependencies.

```ts
/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference types="love-typescript-definitions" />
/// <reference types="peachy-types" />
/// Can be put in tsconfig.json settings.

import * as peachy from "peachy";

const a = peachy.new("animation.json");
a.draw(0, 0);
```
