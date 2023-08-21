import type Product from "@/models/Product";

export type State = {
    smartphones: Product[]
    arrayOutOfSight: Product[]
}
const state: State = {
    smartphones: [],
    arrayOutOfSight: []
}

export const storeSmartphones = {
    state,
    mutations: {
        async getSmartphonesFromServer(state: State) {
            const API_URL: string = 'src/server/api/smartphones.json'
            const path: string = 'products'
            fetch(API_URL).then((res) => {
                if (res.ok) {
                    return res.json().then(json => {
                        state.smartphones = json[path]
                    });
                } else {
                    return res.json().then((error) => {
                        Promise.reject(error)
                    });
                }
            });
        },
        savaArrayOutOfSight (state: State, Array: Product[]) {
            state.arrayOutOfSight = Array
        },
        swapSmartphones(stat: State, idSwap: number[]){
            const idSwapOne: number = idSwap[0]
            const idSwapTwo: number = idSwap[1]
            const indexOne: number = state.smartphones.findIndex(phone => phone.id === idSwapOne)
            const indexTwo: number = state.smartphones.findIndex(phone => phone.id === idSwapTwo)

            const tempPhone: Product = stat.smartphones[indexOne]
            stat.smartphones[indexOne] = stat.smartphones[indexTwo]
            stat.smartphones[indexTwo] = tempPhone
        }
    },
    actions:{
        async getSmartphonesFromServer ({ commit }: { commit: Function }) {
            commit('getSmartphonesFromServer')
        }
    },
    getters: {
        getSmartphones (state: State) {
            return state.smartphones
        },
        getArrayOutOfSight (state: State) {
            return  state.arrayOutOfSight
        },
    }
}