export default function func (len =32 ){
    const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const maxPos = $chars.length
    let result =''
    for(let i =0; i<len; i++){
        let index = Math.round(Math.random()*(maxPos-1))
        result = result+$chars[index];
    }
    return result
}
