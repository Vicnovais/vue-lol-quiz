<template>
  <div>
      <div class="question-container">{{ question }}</div>
      <div class="answer-container" v-for="answer in answers" v-bind:key="answer">{{ answer }}</div>
  </div>
</template>

<script>
import QuestionBuilder from '../DAL/question.builder'

export default {
  name: 'Question',

  data() {
    return {
        question: "",
        answers: []
    }
  },

  created() {
      this.questionBuilder = new QuestionBuilder();
      this.buildQuestion();
  },

  methods: {
      async buildQuestion() {
          await this.questionBuilder.init();
          const titleQuestion = this.questionBuilder.buildTitleQuestion();
          this.selectedQuestion = titleQuestion;
          this.question = titleQuestion.question;
          this.answers = titleQuestion.possibleAnswers;
      }
  }
}
</script>

<style scoped>
.question-container {
    background-color: #fff;
    width: 35vw;
    height: 20vh;
    border-radius: 15px;
    border: 3px solid #3498db;
    margin-bottom: 45px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

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
}

.answer-container:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.answer-container:not(:last-child) {
    margin-bottom: 25px;
}
</style>