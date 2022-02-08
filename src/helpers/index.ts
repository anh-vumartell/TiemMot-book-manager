import {REGEX_XP} from "../appConstants"; 
export const convertStringToNumber = (inputString:string) => Number.parseFloat(inputString)

export const isValidUrl = (url: string) =>{
    if(REGEX_XP.test(url)){
        return true;
    } else{
        return false;
    }
}