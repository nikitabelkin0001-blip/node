export function add(a, b){
    return a + b;
}
export function multiply(a,b){
    return a*b;
}
export const PI = 3.14159;
function internalHelper(){
    return 42;
}


// export { add, multiply, PI };   Можно и так.

// function add(a, b) { return a + b; }
// export { add as sum }; // снаружи будет доступна как sum, а не add
