import {x} from "./x.js";

export function y(params){
    x("y");
    console.log( "y:"+params)
    return "fin y"
}

export {y}