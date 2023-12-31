export default interface Product {
    id: number,
    title: string,
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
    images: string[],
    [key: string]: any
}