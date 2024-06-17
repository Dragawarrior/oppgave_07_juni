const toll = (dollar, dollarToNok = 10) => {
    const valueConverted = dollar * dollarToNok;
    const tollFlatPrice = 249;
    return (valueConverted + tollFlatPrice) * 1.25;
};

console.log(toll(45));