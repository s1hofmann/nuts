"use strict";

const native = require("native-ui-toolkit");

const square = async (controller) => {
    await controller.mouse.move(controller.movement.right(500));
    await controller.mouse.move(controller.movement.down(500));
    await controller.mouse.move(controller.movement.left(500));
    await controller.mouse.move(controller.movement.up(500));
};

describe("Basic test", () => {
    it("Should run a simple test", async () => {
        const config = new native.Config();
        const control = new native.Controller(config);

        await square(control);

        await control.keyboard.pressKey(native.Key.LeftSuper);
        await control.keyboard.pressKey(native.Key.Space);
        await control.keyboard.releaseKey(native.Key.Space);
        await control.keyboard.releaseKey(native.Key.LeftSuper);
        await control.keyboard.type("calculator");
        await control.keyboard.type(native.Key.Return);
    });
});
