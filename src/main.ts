import {Fit, Layout, Rive} from "@rive-app/canvas";

const rive = new Rive({
    src: "assets/riv/t-rex.riv",
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    autoplay: true,
    autoBind: true,
    artboard: "Main",
    stateMachines: "MainStateMachine",
    onLoad: () => {
        rive.resizeDrawingSurfaceToCanvas();
    },
    layout: new Layout({
        fit: Fit.Layout
    }),
});

const onResize = () => {
    rive.resizeDrawingSurfaceToCanvas();
};

window.addEventListener("resize", onResize);
window.addEventListener("orientationchange", onResize);