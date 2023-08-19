<template>
    <div class="wrapper">
        <TheHeader/>
        <TheCatalog/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import TheHeader from './components/TheHeader.vue'
import TheCatalog from "@/components/TheCatalog.vue";

export default defineComponent({
    name: 'App',
    components: {
        TheCatalog,
        TheHeader,
    },
})
</script>
<style scoped>
.wrapper{
    margin: 0 auto;
    width: 1440px;
}
</style>
