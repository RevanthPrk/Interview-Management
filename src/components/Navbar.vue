<template>
 <nav>
  <div v-if="name" id="logo"> {{ name }} </div>
  <div v-else id="logo">
   <img v-bind:src="logoImg" alt="Logo" />
  </div>
  <ul class="nav-links">
   <li v-for="list in navLinks" :key="list.key">
    <a v-if="list.dropdown === false" :href="list.link">{{ list.name }}</a>
    <div class="dropdown-link" v-else>
     <a :href="list.link">{{ list.name }}<span>&#x2193;</span></a>
     <!-- <ul class="dropdown-menu">
      <li v-for="item in list.dropdownLinks" :key="item.key">
       <a :href="item.link">{{ item.name }}</a>
      </li>
     </ul> -->
    </div>
   </li>
  </ul>
  <div v-on:click="openMobileNav()" id="burger">
   <div class="line1"></div>
   <div class="line2"></div>
   <div class="line3"></div>
  </div>
 </nav>
</template>

<script>
export default {
name: 'Navbar',
props: ['name', 'logoImg', 'navLinks'],
methods: {
    openMobileNav() {
    const burger = document.getElementById('burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
// Toggle navigation on mobile
    nav.classList.toggle('nav-active')
    // Burger toggler
    burger.classList.toggle('toggle')
// Animate navigation links
    navLinks.forEach((link, index) => {
        if (link.style.animation || link.style.webkitAnimation) {
            link.style.animation = ''
            link.style.webkitAnimation = ''
        } else {
            link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${
            index / 7
          }s`
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        }
    })
},
openDropdownNav() {
    const dropdownLink = document.querySelectorAll('.dropdown-link')
    dropdownLink.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.children[1].style.display = 'block'
        })
        dropdown.addEventListener('mouseleave', () => {
            dropdown.children[1].style.display = 'none'
        })
    })
},countClicksOnMobileDropdown() {
    const dropdownLink = document.querySelectorAll('.dropdown-link')
    dropdownLink.forEach((dropdown) => {
        let counts = dropdown.clicks || 0
        dropdown.addEventListener('click', () => {
            counts++
            if (counts % 2 == 0) {
                window.location.href = dropdown.children[0].getAttribute('href')
            } else {
                event.preventDefault()
                dropdown.children[1].style.display = 'block'
                setTimeout(() => {
                    dropdown.children[1].style.display = 'none'
                }, 5000)
            }
        })
        setTimeout(() => {
            counts = 0
        }, 8000)
    })
}

},
mounted() {
    this.openDropdownNav()
    if (window.innerWidth < 768) {
        this.countClicksOnMobileDropdown()
    }
},

}

</script>

<style scoped src="@/assets/Navbar.css">

</style>