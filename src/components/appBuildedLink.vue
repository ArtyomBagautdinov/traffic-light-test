<template>
  <div class="app-card">
        <p class="builded-link">{{buildedLink}}</p>
    </div>
</template>

<script>
    import achievmentsMixin from '@/mixins/achievmentsMixin'
    export default {
        mixins : [
            achievmentsMixin
        ]
    }
</script>