const areaRectangle = (length, width) => {
    const areal = length * width;
    return areal;
};

const volumeBox = (height, length, width) => {
    return height * areaRectangle(length, width);
};