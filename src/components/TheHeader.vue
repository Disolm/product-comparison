<template>
    <div class="header">
        <div class="header__name-page">Каталог</div>
        <div class="header__subsection">{{ "Сравнение".toUpperCase() }}</div>
        <div class="header__personal-area">Личный кабинет</div>
        <div class="header__profile"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    name: 'TheHeader',
})
</script>

<style scoped lang="scss">
.header{
    width: 1440px;
    height: 100px;
    background-color: var(--pc-c-white);
    /*top: -1px;*/
    /*left: -1px;*/
    border-bottom: 1px solid var(--pc-c-grey);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 40px 166px;

    &__name-page{
        flex: 8;
        @include text-h5-heavy;
        @include text-letter-005;
        line-height: 21px;
        color: var(--pc-c-blue);
    }
    &__subsection, &__personal-area{
        flex: 1;
        @include text-h6;
        line-height: 14px;
        color: var(--pc-c-darck);
    }
    &__personal-area{
        @include text-letter-002;
    }
    &__profile {
        height: 20px;
        width: 20px;
        background: url("../assets/icons/icon-user.svg") 100% 100% no-repeat;
        background-size: contain;
    }
}
</style>