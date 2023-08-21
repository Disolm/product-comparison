export type Coordinate = {
    top: number,
    left: number,
    idClick: number | null
}
export type State = {
    isOpenWindow: boolean
    coordinates: Coordinate
}
const state: State = {
    isOpenWindow: false,
    coordinates: {
        top: 0,
        left: 0,
        idClick: null,
    },
}

export const storeModal = {
    state,
    mutations:{
        openWindow( state: State ) {
            state.isOpenWindow = true
        },
        closeWindow( state: State ) {
            state.isOpenWindow = false
        },
        saveCoordinates ( state: State , coordinates: Coordinate ) {
            state.coordinates = {...coordinates}
        },
    },
    actions:{
        openWindow ({ commit }: { commit: Function }) {
            commit('openWindow')
        },
        closeWindow ({ commit }: { commit: Function }) {
            commit('closeWindow')
        },

    },
    getters: {
        statusOpenWindow( state: State ) {
            return state.isOpenWindow
        },
        getCoordinates( state: State ){
            return state.coordinates
        }
    }
}