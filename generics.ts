// generics in typerscript
// in generics we don't neccessarily define the types

function add<T>(a: T): void {
  console.log(a);
}
add<number>(5);
//multiple value and type
function add2<T, S>(a: T, b: S): void {
  console.log(`${a},${b}`);
}
add2<number, string>(5, "abcd");
//multiple value and multiple type and simple also
function add3<T, S>(a: T, b: S, c: boolean): void {
  console.log(`${a},${b},${c}`);
}
add3<number, string>(5, "abcd", true);

//watch mode enable by tsc --watch or tsc -w

//rootDir folder for typescript files
//"rootDir"="./src"
//outDir for output files i.e javascript file
