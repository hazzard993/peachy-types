# Peachy Types

Declarations for [peachy](https://github.com/josh-perry/peachy), a parser/renderer for Aseprite animations in LÖVE.

Declarations can be used with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

```sh
yarn add --modules-folder node_modules/@types peachy-types love-typescript-definitions
```

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
