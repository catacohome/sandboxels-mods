elements.void_fluid = {
    color: "#5a00ff",
    behavior: behaviors.LIQUID,
    category: "special",
    state: "liquid",
    density: 2000,

    tick(pixel) {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {

                if (dx === 0 && dy === 0) continue;

                let x = pixel.x + dx;
                let y = pixel.y + dy;

                if (outOfBounds(x,y)) continue;

                let other = pixelMap[x][y];

                if (other && other.element !== "void_fluid") {
                    deletePixel(x,y);
                }
            }
        }

        doDefaults(pixel);
    }
};
