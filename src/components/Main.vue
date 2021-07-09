<template>
  <div>

<div class="leftpane">
    
    <Sidebar />
  
</div>
<div class="middlepane">
    <AvatarInput
      class="w-32 h-32 rounded-full"
      v-model="form.avatar"
      default-src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
    />
</div>
<div class="rightpane">
  <Rightbar />
</div>
  </div>

  
</template>

<script>


import Sidebar from './components/Sidebar.vue'
import Rightbar from './components/Rightbar.vue'
import AvatarInput from "./components/AvatarInput.vue";
export default {
  name: 'App',
  components: {
    Sidebar, Rightbar, AvatarInput
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


<style>

</style>