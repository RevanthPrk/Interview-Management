<template>
  <div class="section"><div class="relative inline-block overflow-hidden">
    <input
      type="file"
      accept="image/*"
      class="hidden"
      ref="file"
      @change="change"
    />
    <img :src="src" alt="Avatar" class="h-full w-full object-cover" />
    <div
      class="absolute top-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center"
    >
      <button
        type="button"
        @click="browse()"
        class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200"
      >
        <icon name="camera" class="h-6 w-6"></icon>
      </button>
      <button
        type="button"
        v-if="value"
        @click="remove()"
        class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200"
      >
        <!-- <icon name="x" class="h-6 w-6"></icon> -->
        <span class="material-icons-outlined h-2 w-2">close</span>
      </button>
    </div>
   </div>
  <div class="topsection">
  <h3>Interview-1</h3>
  <p>Date of the event</p>
  </div>
  <div class="toplink">
   <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="primary" type="flat">ADD MORE DETAILS</vs-button>
    <vs-popup class="holamundo"  title="Details of Round" :active.sync="popupActivo">
      <div>
       <form class="form-style-9">
        <ul>
         <li>
           <input type="text" name="field1" class="field-style field-split align-left" placeholder="Name" />
           <input type="email" name="field2" class="field-style field-split align-right" placeholder="Email" />
         </li>
         <li>
           <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />
           <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" />
         </li>
         <li>
           <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
         </li>
         <li>
           <textarea name="field5" class="field-style" placeholder="Message"></textarea>
         </li>
         <li>
           <input type="submit" value="Send Message" />
         </li>
        </ul>
       </form>
      </div>
    </vs-popup>
  </div>
  </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  
  props: {
    value: File,
    defaultSrc: String,
  },
  watch: {
    value(file) {
      if (!file) {
        this.src = this.defaultSrc;
        this.$refs.file.value = "";
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.src = e.target.result;
        };
      }
    },
  },
  data() {
    return {
      src: this.defaultSrc,
      popupActivo:false,
    };
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    remove() {
      this.$emit("input", null);
    },
    change(e) {
      this.$emit("input", e.target.files[0]);
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped src="@/assets/AvatarInput.css">


</style>