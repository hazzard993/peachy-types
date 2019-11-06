declare module "peachy" {
    import { Image } from "love.graphics";

    const peachy: {
        /**
         * Creates a new Peachy animation object.
         *
         * @example
         * const spinner = peachy.new("spinner.json", love.graphics.newImage("spinner.png"), "Spin");
         *
         * @param dataFile a path to an Aseprite JSON file. It is also possible to pass a predecoded table,
         * which is useful for performance when creating large amounts of the same animation.
         * @param imageData a LÖVE image to animate.
         * @param initialTag the name of the animation tag to use initially.
         * @returns the new peachy object.
         */
        new: (dataFile: string | object | undefined, imageData?: Image, initialTag?: string) => import("./PeachyAnimationObject").PeachyAnimationObject;
    };

    export = peachy;
}
