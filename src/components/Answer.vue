<template>
  <div class="answer-container" @click="$emit('click', $event, item.answer)" v-ripple="'rgba(0, 0, 0, 0.2)'">{{ item.answer }}</div>
</template>

<script>
export default {
  name: 'Answer',

  props: {
    item: { type: Object }
  }
}
</script>

<style scoped>
.answer-container {
  background-color: #fff;
  width: 35vw;
  height: 8vh;
  border-radius: 15px;
  border: 3px solid #0abde3;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  padding: 12px;
  box-sizing: border-box;
}

.answer-container.active {
  background-color: rgba(0,0,0,0.16);
}

.answer-container:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.answer-container:not(:last-child) {
  margin-bottom: 25px;
}

.answer-container.correct {
  background-color: rgba(46, 204, 113, 0.5);
}

.answer-container.incorrect {
  background-color: rgba(231, 76, 60, 0.5);
}
</style>