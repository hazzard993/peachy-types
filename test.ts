/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference types="love-typescript-definitions" />
/// <reference path="./index.d.ts" />
import * as peachy from "peachy";

const a = peachy.new("animation.json");
a.draw(0, 0);