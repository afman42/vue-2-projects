<template>
  <main>
    <div class="block bcg-black"></div>
    <div class="block">
      <div class="container">
        <img
          :src="getImage"
          alt="random user"
          class="user-img"
        />
        <p class="user-title">My {{ title }} is</p>
        <p class="user-value">{{ value }}</p>
        <div class="values-list">
          <button
            class="icon"
            data-label="name"
            @mouseover="handleValue"
          >
            <font-awesome-icon icon="user" />
          </button>
          <button
            class="icon"
            data-label="email"
            @mouseover="handleValue"
          >
            <font-awesome-icon icon="envelope-open" />
          </button>
          <button class="icon" data-label="age" @mouseover="handleValue">
            <font-awesome-icon icon="calendar-times" />
          </button>
          <button
            class="icon"
            data-label="street"
            @mouseover="handleValue"
          >
            <font-awesome-icon icon="map" />
          </button>
          <button
            class="icon"
            data-label="phone"
            @mouseover="handleValue"
          >
            <font-awesome-icon icon="phone" />
          </button>
          <button
            class="icon"
            data-label="password"
            @mouseover="handleValue"
          >
            <font-awesome-icon icon="lock" />
          </button>
        </div>
        <button class="btn" type="button" @click="getPerson">
          {{ loading ? 'loading...' : 'random user' }}
        </button>
      </div>
    </div>
  </main>
</template>

<script>
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

export default {
  name: "App",
  data() {
    return {
      loading: true,
      person: null,
      value: "random person",
      title: "name",
    };
  },
  computed:{
    getImage(){
      return (this.person && this.person.image) || defaultImage
    }
  },
  created() {
    this.getPerson();
  },
  methods: {
    handleValue(e) {
      if (e.target.classList.contains("icon")) {
        const newValue = e.target.dataset.label;
        this.title = newValue;
        this.value = this.person[newValue];
      }
    },
    async getPerson() {
      this.loading = true;
      const response = await fetch(url);
      const data = await response.json();
      const person = data.results[0];
      const { phone, email } = person;
      const { large: image } = person.picture;
      const { password } = person.login;
      const { first, last } = person.name;
      const {
        dob: { age },
      } = person;
      const {
        street: { number, name },
      } = person.location;

      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
      };
      this.person = newPerson;
      this.loading = false;
      this.title = "name";
      this.value = newPerson.name;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
