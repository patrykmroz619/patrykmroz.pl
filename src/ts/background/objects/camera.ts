import { PerspectiveCamera } from 'three';

export const getCamera = (targetElement: HTMLElement): PerspectiveCamera => {
    const camera = new PerspectiveCamera(
        85,
        targetElement.offsetWidth / targetElement.offsetHeight,
        0.1,
        1000
    );
    camera.position.z = 90;

    const onResize = () => {
        camera.aspect = targetElement.offsetWidth / targetElement.offsetHeight;
        camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    onResize();

    return camera;
};