<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header"></slot>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
           Are You sure You want to Delete this Row?
          </slot>
        </section>
        <footer class="modal-footer">
           <button @click="close(); deleteUserDetails()" aria-label="Close modal">Delete</button>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'Modal',
    props:['deleteUserDetails'],
    methods: {
      close() {
        this.$emit('close');
      },
    },  
  };
</script>


<style scoped src="@/assets/Modal.css">
  
</style>