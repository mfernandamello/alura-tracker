<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Box'
})
</script>

<template>
    <div class="box has-text-wight-bold">
        <slot></slot>
    </div>
</template>