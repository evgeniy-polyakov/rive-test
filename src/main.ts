import {Rive} from "@rive-app/canvas";

const rive = new Rive({
    src: "assets/riv/t-rex.riv",
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    autoplay: true,
    autoBind: true,
    stateMachines: "default",
    onLoad: () => {
        rive.resizeDrawingSurfaceToCanvas();
    },
});

window.addEventListener('resize', () => {
    rive.resizeDrawingSurfaceToCanvas();
});