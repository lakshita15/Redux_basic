const BUY_BAT = "BUY_BAT" //action name
const SELL_BAT = 'SELL_BAT'
// facility to buy more than 1 bat
export const buybat = (number = 1) => {
    return {
        type: BUY_BAT,
        payload: number
    }
}
export const sellBat = (number = 1) => {
    return {
type: SELL_BAT,
payload : number
    }
}