<template>
    <div class="glass-pane">
        <div class="return-modal">
            <div class="icon-container">
                <div class="correct-icon"></div>
            </div>
            <div class="msg-container">
                <span>Correto!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
      modalType: { type: String }
  }
}
</script>

<style scoped>
* {
    font-family: 'Open Sans', sans-serif;
}

.icon-container, .msg-container {
    width: 50%;
    height: 100%;
}

.icon-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.msg-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    text-transform: uppercase;
}

.correct-icon {
    width: 20px;
    height: 10px;
    border: 5px solid green;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);    
}

.glass-pane {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.return-modal {
    width: 400px;
    height: 100px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: bounce .5s ease-in-out;
}

@keyframes bounce {
  0%    { transform: scale(1.1); }
  10%   { transform: scale(1.2); }
  20%   { transform: scale(1.3); }
  30%   { transform: scale(1.4); }
  40%   { transform: scale(1.5); }
  50%   { transform: scale(1.5); }
  60%   { transform: scale(1.4); }
  70%   { transform: scale(1.3); }
  80%   { transform: scale(1.2); }
  90%   { transform: scale(1.1); }
  100%  { transform: scale(1);   }
}
</style>