export default interface ProductMini {
    manufacturer: string,
    releaseYear: number,
    screenDiagonal: number,
    country: string,
    memory: number,
    screenRefreshRate: number,
    NFC: boolean,
    eSIM: boolean,
    wirelessCharging: boolean,
    price: number,
    [key: string]: any
}