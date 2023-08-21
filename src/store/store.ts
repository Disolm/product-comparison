import { createStore } from "vuex";
import { storeModal } from "@/store/modalWindow";
import { storeSmartphones } from "@/store/smartphoneServer";

export const store = createStore({
    modules: {
        storeModal: storeModal,
        storeSmartphones: storeSmartphones
    }
})