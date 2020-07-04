<template>
  <div class="answer-container" 
       v-ripple="'rgba(0, 0, 0, 0.35)'">{{ item }}</div>
</template>

<script>
export default {
  name: 'Answer',

  props: {
      item: { type: String }
  }
}
</script>