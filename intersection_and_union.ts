//in union you can write any on the the all types that is defined or all but in intersation we have to cumpulsary define all the the type that are present
// union is represented by pipe symbol"|"
type value = string | number | boolean;

const formattedData = (value: value) => {
  if (typeof value === "string") {
    return value[0].toUpperCase() + value.slice(1);
  } else if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  } else if (typeof value === "boolean") {
    console.log("YES");
  }
};
console.log(formattedData(45));
console.log(formattedData("rajesh"));
formattedData(true);

//ampersand operator is used in intersection type "&" ampersand means all the properties from both the types are going to be used
