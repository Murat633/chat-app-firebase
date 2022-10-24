<template>
  <div class="container">
    <Navbar />
    <ChatWindow/>
    <ChatForm />
  </div>
</template> 

<script>
import Navbar from '../components/Navbar.vue';
import ChatForm from '../components/ChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
export default {
  components:{ Navbar, ChatForm, ChatWindow }
}
</script>

<style>

</style>