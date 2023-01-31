const flavorOilPercentRange = document.getElementById("flavor_oil_percent");
const flavorOilPercentValue = document.getElementById("flavor_oil_percent_value");
const gpuRange = document.getElementById("gpu_range");
const gpuValue = document.getElementById("gpu_value");

setGPUValue();

gpuRange.addEventListener("input", (ev)=> {
    setGPUValue();
})

function setGPUValue() {
    const index = gpuRange.value;

    const values = [0.5, 1, 1.5, 2, 3, 4, 5, 6, 7];
    gpuValue.innerText = values[index].toString();
}

setFlavorOilPercentageValue();

flavorOilPercentRange.addEventListener("input", (ev)=> {
    setFlavorOilPercentageValue();
})

function setFlavorOilPercentageValue() {
    flavorOilPercentValue.innerText = flavorOilPercentRange.value.toString();
}