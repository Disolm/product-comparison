<template>
    <img class="icon" :alt="icon" :src="iconSrc" />
</template>

<script>
import iconFalse from '@/assets/icons/icon-false.svg';
import iconTrue from '@/assets/icons/icon-true.svg';
import iconUser from '@/assets/icons/icon-user.svg';
import iconSwap from '@/assets/icons/icon-swap.svg';
import iconOpen from '@/assets/icons/icon-m_open.svg';


const icons = {
    'iconFalse': iconFalse,
    'iconTrue': iconTrue,
    'iconUser': iconUser,
    'iconSwap': iconSwap,
    'iconOpen': iconOpen,
};

export default {
    name: 'UiIcon',

    props: {
        icon: {
            type: String,
            required: true,
            validator: (name) => Object.keys(icons).includes(name),
        },
    },

    computed: {
        iconSrc() {
            return icons[this.icon];
        },
    },
};
</script>

<style scoped>
.icon {
    display: block;
}
</style>
