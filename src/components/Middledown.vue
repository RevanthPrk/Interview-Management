<template>
  <div class="timeline">
   <div class="drop">
    <div class="rounds"><label for="rounds">Number of Rounds:</label>
     <vs-input-number color="primary" type="border" v-model="number"/>
    </div>
    <div class="size">
     <label>Type of Rounds:</label>
     <select>
      <option >Consecutive Rounds</option>
      <option >Interview Round</option>
      <option >Discussion Round</option>
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
   <div class="offline" v-if="IsOffline">
    <div class="container right">
     <div class="content">
      <h2>08 Sept 2019</h2>
      <p>Round - 1<br>Resume Shortlisting<br>Discussion Round</p>
     </div>
    
    <div class="dropdown">
     <button class="dropbtn">Offline Round
      <i class="fa fa-caret-down"></i>
     </button>
     <div class="dropdown-content">
      <a href="#">Online Round</a>
      <a href="#">Offline Round</a>
     </div>
    </div>
    <div class="inline">
     <a href="#">Delete</a>
      <div class="centerx">
       <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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
  
 
  <div class="container right">
   <div class="content">
    <h2>20 Sep 2019</h2>
    <p>Round - 2<br>Resume Shortlisting<br>Discussion Round</p>
   </div>
   <div class="dropdown">
    <button class="dropbtn">Offline Round
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="#">Online Round</a>
       <a href="#">Offline Round</a>
    </div>
   </div> 
  <div class="inline">
   <a href="#">Delete</a>
  <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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

   <div class="container right">
   <div class="content">
    <h2>20 Sep 2019</h2>
    <p>Round - 2<br>Resume Shortlisting<br>Discussion Round</p>
   </div>
   <div class="dropdown">
    <button class="dropbtn">Offline Round
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="#">Online Round</a>
       <a href="#">Offline Round</a>
    </div>
   </div> 
  <div class="inline">
   <a href="#">Delete</a>
  <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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


  <div class="container right">
     <div class="content">
      <h2>20 Sep 2019</h2>
      <p>Round - 2<br>Resume Shortlisting<br>Discussion Round</p>
     </div>
    <div class="dropdown">
      <button class="dropbtn">Offline Round
       <i class="fa fa-caret-down"></i>
      </button>
     <div class="dropdown-content">
       <a href="#">Online Round</a>
       <a href="#">Offline Round</a>
     </div>
    </div> 
   <div class="inline">
    <a href="#">Delete</a>
   <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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
  </div>

  <div class="online" v-if="IsOnline">
   <div class="container right">
    <div class="content">
      <h2>2 Jul 2020</h2>
      <p>Round - 1<br>Photograph Contest<br>Consecutive Round</p>
    </div>
    <div class="dropdown">
    <button class="dropbtn">Online Round
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="#">Offline Round</a>
      <a href="#">Online Round</a>
    </div>
  </div> 
   <div class="inline">
   <a href="#">Delete</a>
  <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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
  

   <div class="container right">
    <div class="content">
      <h2>1 Jun 2021</h2>
      <p>Round - 3<br>Internship Interview<br>Interview Round</p>
    </div>
    <div class="dropdown">
    <button class="dropbtn">Online Round
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="#">Offline Round</a>
      <a href="#">Online Round</a>
    </div>
  </div> 
   <div class="inline">
   <a href="#">Delete</a>
  <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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

  <div class="container right">
    <div class="content">
      <h2>1 Jun 2021</h2>
      <p>Round - 3<br>Internship Interview<br>Interview Round</p>
    </div>
    <div class="dropdown">
    <button class="dropbtn">Online Round
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="#">Offline Round</a>
      <a href="#">Online Round</a>
    </div>
  </div> 
   <div class="inline">
   <a href="#">Delete</a>
  <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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

   <div class="container right">
    <div class="content">
      <h2>1 Jun 2021</h2>
      <p>Round - 3<br>Internship Interview<br>Interview Round</p>
    </div>
    <div class="dropdown">
    <button class="dropbtn">Online Round
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="#">Offline Round</a>
      <a href="#">Online Round</a>
    </div>
  </div> 
   <div class="inline">
   <a href="#">Delete</a>
  <div class="centerx">
    <vs-button class="btn" @click="popupActivo=true" color="dark" type="filled">Add Details</vs-button>
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
  </div>
 </div>
</template>

<script>
export default {
data(){
    return {
      popupActivo:false,
      IsOffline:true,
      typeValue:"offline/online",
      IsOnline:true,
        number:1,
    }
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
      
     }
  }

}
</script>


<style scoped src="@/assets/Middledown.css">

</style>