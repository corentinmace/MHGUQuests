<template>
  <div id="nav">
    <router-link to="/">Village</router-link>
    <router-link to="/guild">Guild</router-link>
    <router-link to="/event">Event</router-link>
    <router-link to="/permit">Permit</router-link>

    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>



<style lang="scss">

// * {
//   outline: 1px solid red;
// }

body { 
    margin: 0;
    paddinng: 0;
    background: #0f0f0f;
    color: white;
}

#nav {
  width: 100%;
  background: #212121;
  padding: 10px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  text-align: left;

  a {
    color: #fefefe;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    transition: all ease .3s;
    margin: 0 5px;
    &:hover {
      color: #6b6b6b;
      transition: all ease .3s;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 10px;
  margin-top: 70px;
}

.hidden {
  display: none;
}

.quests {
  padding: 1%;
  margin: 10px;
  background: #212121;
  color: #fff;
  border-radius:10px; 
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .quest-icon {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .stars {
    position: absolute;
    top: 30px;
    left: 10px;
  }

  .quest-icon img {
    width: 30px;
  }

  .key, .urgent {
    position: absolute;
    top: 0;
    right: 10px;
    color: white;
    font-size: 12px;
    width:5%;
    padding: 5px 8px;
    border-radius: 10px;
    text-align: center;
  }

  .key {
    background: #fccf03;
    &::after {
      content: "Key"
    }
  }

  .urgent {
      background: #fc9003;
    ::after {
      content: "Urgent";
    }
  }
}





</style>
