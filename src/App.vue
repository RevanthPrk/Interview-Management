<template>
  <body><div id="app">
    <Navbar
      name="Pro Minutes"
      :navLinks="[
        {
          name: 'Home',
          link: '/home',
          dropdown: false,
        },
{ name: 'About', link: '/about', dropdown: false },
{
          name: 'Contacts',
          link: '/contact',
          dropdown: false,
          dropdownLinks: [ 
            { name: 'A', link: '/pA', dropdown: false },
            { name: 'B', link: '/pB', dropdown: false },
          ],
        },
        {
          name: 'Projects',
          link: '/projects',
          dropdown: false,
          dropdownLinks: [ 
            { name: 'C', link: '/pA', dropdown: false },
            { name: 'D', link: '/pB', dropdown: false },
          ],
        },
      ]"
    />
     <div class="middle"><AvatarInput
      class="w-32 h-32 rounded-full"
      v-model="form.avatar"
      default-src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png"
    /></div>
    <div class="leftbar"><Sidebar /></div>
    <div class="right"><Rightbar /></div>
    <div class="middledown"><Middledown /></div>
  </div></body>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Rightbar from './components/Rightbar.vue'
import AvatarInput from "./components/AvatarInput";

import Middledown from './components/Middledown.vue';

export default {
  name: 'App',
  components: {
    Navbar, Sidebar, Rightbar, AvatarInput, Middledown
  },
 
    data() {
    return {
      form: {
        avatar: null,
      },
    };
  },
  
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  margin-top: -60px;
  background-color: lightgray;
}
.left{
    width: 25%;
    min-width: 350px;
    height: available;
    min-height: 400px;
    float: left;
    background-color: rosybrown;
    border-collapse: collapse;
    
  
}

.middle{
   width: 50%;
   min-width: 940px;
   height: available;
   min-height: 180px;
   float: left;
   background-color: #ffffff;
   border-collapse: collapse;
     margin-left: 270px;
     margin-top: 80px;
}

.middledown{
   width: 50%;
   min-width: 1230px;
   height: available;
   min-height: 520px;
   float: left;
   background-color: #ffffff;
   border-collapse: collapse;
   margin-top: 12px;

}

.right{
    width: available;
    height: available;
    position: relative;
    margin-left: 75.7%;
    background-color: yellow;
    border-collapse: collapse;
  
}

@media screen and (max-width: 768px) {
	.middle{
		min-width: 300px;
		margin-left: 30px;
    height: 300px;
	}
  .left{
    margin-top: 30px;
  }
	.middledown{
    min-width: 350px;
  }
	
	}

</style>
