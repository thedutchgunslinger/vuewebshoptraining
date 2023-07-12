<script>
    export default {
        props: {
            step: {
                type: Number,
                required: true
            }
        },
    }
</script>

<template>
    <div id="wrapper" class="w-full h-10 bg-slate-600 rounded overflow-hidden">
        <div id="bar" class="h-full bg-green-500 inline-block flex justify-end items-center transition-all duration-300" :style="{width: step + '%'}">
           <p class="inline mr-2">{{ step }}%</p>
        </div>
    </div>
</template>
