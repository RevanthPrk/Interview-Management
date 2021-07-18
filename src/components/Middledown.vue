<template>
  <div class="timeline">
   <div class="drop">
    <div class="rounds"><label for="rounds">Number of Rounds:</label>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :deleteUserDetails=deleteUserDetails()
    />
    <div class="increase">
     <button class="add" @click="addUserDetails()" >+</button>
     <button class="delete" @click="deleteUserDetails(); selectUserDetails(meeting)" >-</button></div>
    </div>
    <div class="size">
     <label>Type of Rounds:</label>
     <select  v-model="value">
      <option value="Consecutive Round">Consecutive Rounds</option>
      <option value="Interview Round">Interview Round</option>
      <option value="Discussion Round">Discussion Round</option>
     </select>
    </div>
    <div class="crust">
     <label>Type of Contest:</label>
     <select @change="changeType" v-model="typeValue">
      <option value="offline/online">Online/Offline Rounds</option>
      <option value="online">Online Rounds</option>
      <option value="offline">Offline Rounds</option>
     </select>
    </div>
   </div>
   <hr>
   <div>
    <div v-for="meeting in filterMeetings" :key="meeting.id" class="container right">
     <div class="content">
      <h2>{{ meeting.rounddate }}</h2>
      <p>{{ meeting.roundtype }}<br>{{ meeting.resumestatus }}<br>{{ meetings.roundtype }}</p>
     </div>
    <select class="down" v-model="roundnumber"> 
      <option value="online" class="offline" v-if="IsOffline">Offline Round</option>
      <option value="offline" class="online" v-if="IsOnline">Online Round</option>
     </select>
    <div class="inline">
     <a href="#" @click="selectUserDetails(meeting); showModal()">Delete</a>
      <div class="centerx">
       <vs-button class="btn" @click="popupActivo=true;" color="dark" type="filled">Add Details</vs-button>
    <vs-popup class="holamundo"  title="Details of Round" :active.sync="popupActivo">
     <Popup />
    </vs-popup>
  </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>import Popup from './Popup.vue';
import Modal from './Modal.vue';
import axios from "axios";
export default {
 components:{Popup, Modal},
data: ()  => {
    return {
      popupActivo:false,
      IsOffline:true,
      typeValue:"offline/online",
      IsOnline:true,
      roundnumber:'online',
      isModalVisible: false,
      newmeetings:{rounddate:'30-SEPT-2000',roundnumber:'online',resumestatus:'SHORTLISTED',roundtype:'Interview Round'},
      currentmeetings:{},
      meetings:[],
      type:'',
      value:'',
    };
},
  mounted:function(){
    this.getAlldetails();
  },

  methods:{
     changeType(){
        if(this.typeValue == "online"){
          this.IsOnline=true;
          
          this.IsOffline=false;

        }
        else if(this.typeValue == "offline"){
           this.IsOnline=false;
          this.IsOffline=true;
        }
        else{
           this.IsOnline=true;
          this.IsOffline=true;
        }
      },
    
    getAlldetails(){
        axios.get("http://localhost/ims/process.php?action=read").then(
            response => {this.meetings = response.data.imstable}
        );
    },
    addUserDetails(){
        
        var formData1 = this.toFormDatadetails(this.newmeetings);
        axios.post("http://localhost/ims/process.php?action=create",formData1).then(response => {
                this.meetings ={rounddate:'',roundnumber:'',resumestatus:'',roundtype:''};
                this.getAlldetails();
                console.log(response);
    });
    },
    UpdateUserDetails(){
        
        var formData1 = this.toFormDatadetails(this.currentmeetings);
        axios.post("http://localhost/ims/process.php?action=update",formData1).then(response => {
                this.currentmeetings ={};
                this.getAlldetails();
                console.log(response);
    });
    },
    deleteUserDetails(){
        var formData1 = this.toFormDatadetails(this.currentmeetings);
        axios.post("http://localhost/ims/process.php?action=delete",formData1).then(response => {
                this.currentmeetings ={};
                this.getAlldetails();
                console.log(response);
                
     });
     },
    toFormDatadetails(obj){
        var fd = new FormData();
        for(var i in obj){
            fd.append(i,obj[i]);
        }
        return fd;
    },
    selectUserDetails(user){
        this.currentmeetings = user;
    },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
  },
  computed: {
            filterMeetings: function(){
                return this.meetings.filter(meeting => !meeting.roundtype.indexOf(this.value))
            }
        }
    }
    </script>


<style scoped src="@/assets/Middledown.css">

</style>