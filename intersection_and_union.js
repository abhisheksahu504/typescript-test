"use strict";
const formattedData = (value) => {
    if (typeof value === "string") {
        return value[0].toUpperCase() + value.slice(1);
    }
    else if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    }
    else if (typeof value === "boolean") {
        console.log("YES");
    }
};
console.log(formattedData(45));
console.log(formattedData("rajesh"));
formattedData(true);
