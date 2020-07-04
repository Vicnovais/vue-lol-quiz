<template>
  <div id="page" class="test">
    <Question />
  </div>
</template>

<script>
import Question from './Question.vue'

export default {
  name: 'Page',
  components: {
    Question
  }
}
</script>

<style scoped>
#page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>