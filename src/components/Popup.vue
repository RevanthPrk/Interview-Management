<template>
<div>
  <form class="form-style-9">
    <ul>
     <li>
      <label for="cars">Shortlisted or Not-Shortlisted:</label>
      <select id="cars" name="cars">
       <option value="Shortlisted">Shortlisted</option>
       <option value="Not-shortlisted">Not-Shortlisted</option>
      </select>
     </li>
     <br>
     <li>
       <input type="radio"  name="fav_language" value="HTML">
       <label for="html" id="html">Online</label><br>
       <input type="radio"  name="fav_language" value="CSS">
       <label for="css" id="css">Offline</label>
     </li>
     <br>
     <li>
       <label for="date round">Update :</label>
       <input type="datetime-local" id="dateround" name="dateround">
     </li>
     <br>
     <li>
       <input type="submit" value="Add Details" />
     </li>
   </ul>
  </form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped src="@/assets/Middledown.css">

</style>