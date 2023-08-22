<template>
    <img class="icon" :alt="icon" :src="iconSrc" />
</template>

<script lang="ts">
import iconFalse from '@/assets/icons/icon-false.svg';
import iconTrue from '@/assets/icons/icon-true.svg';
import iconUser from '@/assets/icons/icon-user.svg';
import iconSwap from '@/assets/icons/icon-swap.svg';
import iconOpen from '@/assets/icons/icon-m_open.svg';

interface Icons {
    [key: string]: string;
}

const icons: Icons = {
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
            validator: (name: string) => Object.keys(icons).includes(name),
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
