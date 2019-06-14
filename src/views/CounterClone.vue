<template>
  <div class="counter">
    <h2>Counter Clone</h2>
    <h3>{{ count }}</h3>
    <div :class="$style.form">
      <button @click.prevent="handleIncrement" :class="[$style.btn, $style['btn-increment']]">
        +
      </button>
      <input type="number" v-model="entry" :class="$style.input">
      <button @click.prevent="handleDecrement" :class="[$style.btn, $style['btn-decrement']]">
        -
      </button>
    </div>
    <div class="form-help">{{ text }}</div>
    <router-link :to="{ path: '/counter'}">Go to Counter</router-link>
  </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
  name: 'CounterClone',
  data() {
    return {
      count: 0,
      entry: 3,
      text: '',
    };
  },
  methods: {
    handleIncrement() {
      this.count += parseInt(this.entry, 10);
      EventBus.$emit('count-incremented');
      this.entry = 0;
    },
    handleDecrement() {
      this.count -= parseInt(this.entry, 10);
      EventBus.$emit('count-decremented');
      this.entry = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
.form {
  padding: 15px;
  margin: 50px auto;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4) inset,
    0 1px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  width: 60px;
  height: 20px;
  padding: 10px 5px;
  font: bold 15px "lucida sans", "trebuchet MS", "Tahoma";
  border: 0;
  background: #eee;
  border-radius: 3px 0 0 3px;
  text-align: center;
}
.btn {
  overflow: visible;
  position: relative;
  border: 0;
  padding: 0;
  cursor: pointer;
  height: 40px;
  width: 40px;
  font-size: 0;
  color: transparent;
  text-transform: uppercase;
  background: #5ed000;
  border-radius: 0 3px 3px 0;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
}
.btn:focus,
.btn:active {
  outline: none;
}
.btn::after,
.btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
.btn-decrement::before,
.btn-increment::before {
  width: 10px;
  height: 2px;
}
.btn-increment::after {
  width: 2px;
  height: 10px;
}
.btn-increment:hover {
  background: #00d050;
}
.btn-decrement {
  background: #6c00d0;
}
.btn-decrement:hover {
  background: #ab0cab;
}
</style>
