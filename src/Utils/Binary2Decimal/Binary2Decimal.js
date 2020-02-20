export default (binaryValue) => {
    
    return binaryValue.split(';').map((aux)=>{
        return bin2DecConversion(aux);
    }).join(';');
    
}

export const isBinary = (binaryValue) => {
    let regex = /[01;]{0,}/

    let out = binaryValue.match(regex);
    return out[0].length === binaryValue.length
}

const bin2DecConversion = (binaryValue)=>{
    let decimalValue = 0;

    if (binaryValue) {
        for ( let i = 0; i < binaryValue.length; i++ ){
            decimalValue = parseInt(decimalValue) + (parseInt(binaryValue[binaryValue.length - (1+i)]) * Math.pow(2,i));
        }
    }

    return decimalValue === 0 ? "" : decimalValue;

}