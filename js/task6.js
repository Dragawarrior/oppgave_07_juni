const areaRectangle = (length, width) => {
    const areal = length * width;
    return areal;
};
//Reused code

const surfaceAreaBox = (length, width, height) => {
    return 2 * areaRectangle(length, width) + 2 * areaRectangle(width, height) + 2 * areaRectangle(length, height)
}