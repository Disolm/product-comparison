import {createStore} from "vuex";

export type State = {
    isOpenWindow: boolean
    coordinates: object
}
const state: State = {
    isOpenWindow: false,
    coordinates: {
        top: 0,
        left: 0
    }
}

export const store = createStore({
    state,
    mutations:{
        openWindow( state) {
            state.isOpenWindow = true
        },
        closeWindow( state) {
            state.isOpenWindow = false
        },
        saveCoordinates (state, coordinates ) {
            state.coordinates = {...coordinates}
        }
    },
    actions:{
        openWindow (context) {
            context.commit('openWindow')
        },
        closeWindow (context) {
            context.commit('closeWindow')
        },

    },
    getters: {
        statusOpenWindow(state) {
            return state.isOpenWindow
        },
        getCoordinates(state){
            return state.coordinates
        }
    }
})