export interface PeachyAnimationObject {
    " __peachyAnimationObjectBrand": never;

    /**
     * Switch to a different animation tag.
     *
     * @param tag the animation tag name to switch to.
     */
    setTag(tag: string): void;

    /**
     * Jump to a particular frame index (1-based indexes) in the current animation.
     * @param frame the frame index to jump to.
     */
    setFrame(frame: number): void;

    /**
     * Draw the animation's current frame in a specified location.
     *
     * @param x the x position.
     * @param y the y position.
     * @param rot the rotation to draw at. (Default: 0)
     * @param sx the x scaling. (Default: 1)
     * @param sy the y scaling. (Default: 1)
     * @param ox the origin offset x. (Default: 0)
     * @param oy the origin offset y. (Default: 0)
     */
    draw(x: number, y: number, rot?: number, sx?: number, sy?: number, ox?: number, oy?: number): void;

    /**
     * Update the animation.
     * @param dt frame delta. Should be called from love.update and given the dt.
     */
    update(dt: number): void;

    /**
     * Move to the next frame.
     *
     * Internal: unless you want to skip frames, this generally will not ever need to be called manually.
     */
    nextFrame(): void;

    /**
     * Check for callbacks
     */
    call_onLoop(): void;

    /**
     * Pauses the animation.
     */
    pause(): void;

    /**
     * Unpauses the animation.
     */
    play(): void;

    /**
     * Stops the animation (pause it then return to first frame or last if specified)
     */
    stop(onLast: boolean): void;

    /**
     * Adds a callback function that will be called when the animation loops
     */
    onLoop<T extends any[]>(fn: (this: void, ...args: T) => void, ...vararg: T): void;

    /**
     * Toggle between playing/paused.
     */
    togglePlay(): void;

    /**
     * Provides width stored in the metadata of a current frame
     */
    getWidth(): void;

    /**
     * Provides height stored in the metadata of a current frame
     */
    getHeight(): void;
}
