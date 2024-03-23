export function isEmail (value){
    return !value.includes('@')
}
export function passwordLength(value){
    return value.length<4
}