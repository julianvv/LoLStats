<template>
  <nav>
    <!-- PC/Laptop navigation -->
    <ul class="navbar">
      <div>
        <nuxt-link to="/">
          <img
            class="nav-logo"
            src="../../static/valorant/Logomark/V_Logomark_Red.png"
          />
        </nuxt-link>
      </div>
      <li class="nav-item">
        <nuxt-link to="/valorant"> Home </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/valorant/agents"> Agents </nuxt-link>
      </li>
    </ul>

    <!-- Mobile Navigation -->
    <ul class="mobile-navbar">
      <div>
        <nuxt-link to="/">
          <img
            class="nav-logo"
            src="../../static/001.3_RG_2021_LOGOMARK_CIRCLE_OFFWHITE_RED_CONTAINER.png"
          />
        </nuxt-link>
      </div>
      <!-- Add click event to open mobile menu -->
      <BaseHeaderHamburger class="hamburger"/>
    </ul>
  </nav>
</template>

<script>
import BaseHeaderHamburger from "./HeaderHamburger.vue";

export default {
  components: {
    BaseHeaderHamburger
  }
}
</script>

<style scoped>
/* General nav style */
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

ul.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul.mobile-navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo size */
div img.nav-logo {
  height: auto;
  width: 96px;
  margin: 10px 20px;
}

/* Swap navbars based on screen width */
@media (max-width: 480px) {
  ul.navbar {
    display: none;
  }
}

@media (min-width: 480px) {
  ul.mobile-navbar {
    display: none;
  }
}

/* Mobile hamburger icon margin */
.hamburger {
  margin-right: 24px;
}

/* Nav link styles */
.nav-item a {
  color: inherit;
  margin: 0px 10px;
  font-size: 1.2rem;
}

a.nuxt-link-exact-active {
  color: #FF4655;
}
</style>