<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="../assets/mobile-logo.svg" alt="logo" class="logo-sm logo" />
        <img src="../assets/desktop-logo.svg" alt="logo" class="logo-bg" />
      </router-link>

      <div
        :class="[showPopUpMenu ? 'show-popup-menu-sm' : '', 'popup-menu-sm']"
      >
        <ul>
          <li class="popup-menu-link-sm">
            <router-link to="/features" active-class="active"
              >Features</router-link
            >
          </li>
          <li class="popup-menu-link-sm">
            <router-link to="/premium" active-class="active"
              >Premium</router-link
            >
          </li>
          <li class="popup-menu-link-sm">
            <router-link to="/bussiness" active-class="active"
              >For Teams</router-link
            >
          </li>
          <li class="popup-menu-link-sm">
            <button
              class="dropdown-toggle"
              @click="showDropdown = !showDropdown"
            >
              <p>Resources</p>
              <chevron-down-icon v-if="!showDropdown" />
              <chevron-up-icon v-if="showDropdown" />
            </button>

            <ul v-if="showDropdown" class="dropdown-sm">
              <li>
                <router-link to="/">Templates</router-link>
              </li>
              <li>
                <router-link to="/">Getting Started Guide</router-link>
              </li>
              <li>
                <router-link to="/">Blog</router-link>
              </li>
            </ul>
          </li>
          <li class="popup-menu-auth-link-sm">
            <router-link to="/showlogin">Login</router-link>
          </li>
          <li class="popup-menu-auth-link-sm register-action">
            <router-link to="/showsignup">Sign up</router-link>
          </li>
        </ul>
      </div>

      <div class="menu-items">
        <ul class="menu-items-bg">
          <li>
            <router-link to="/features" active-class="active"
              >Features</router-link
            >
          </li>
          <li>
            <router-link to="/premium" active-class="active"
              >Premium</router-link
            >
          </li>
          <li>
            <router-link to="/bussiness" active-class="active"
              >For Teams</router-link
            >
          </li>
          <li class="dropdown-parent-bg">
            <button class="dropdown-toggle dropdown-toggle-bg">
              <p>Resources</p>
              <chevron-down-icon />
            </button>

            <ul class="dropdown-bg">
              <li>
                <router-link to="/">
                  <span class="dropdown-link-headliner"> Templates</span>
                  <span class="dropdown-link-text">
                    Kickstart your next project with Todoist templates for every
                    occasion.
                  </span>
                </router-link>
                <hr />
              </li>
              <li>
                <router-link to="/">
                  <span class="dropdown-link-headliner">Getting Started</span>
                  <span class="dropdown-link-text">
                    Everything you need to know to get your todoist app up and
                    running in minutes.
                  </span>
                </router-link>
                <hr />
              </li>
              <li>
                <router-link to="/">
                  <span class="dropdown-link-headliner">
                    Productivity Methods + Quiz</span
                  >
                  <span class="dropdown-link-text">
                    Learn the most popular productivity methods and discover
                    which one suits you the best.
                  </span>
                </router-link>
                <hr />
              </li>
              <li>
                <router-link to="/">
                  <span class="dropdown-link-headliner">Help Center</span>
                  <span class="dropdown-link-text">
                    Find answers to your questions and tips to get the most out
                    of your Todoist.
                  </span>
                </router-link>
                <hr />
              </li>

              <li>
                <router-link to="/">
                  <span class="dropdown-link-headliner">Blog</span>
                  <span class="dropdown-link-text">
                    Productivity advice you wont find anywhere, plus Todoist
                    tips and product news.
                  </span>
                </router-link>
                <hr />
              </li>
            </ul>
          </li>
        </ul>

        <ul class="menu-auth" v-if="!showPopUpMenu">
          <li>
            <router-link to="/showlogin" active-class="active"
              >Login</router-link
            >
          </li>
          <li>
            <router-link
              class="signup-action"
              to="/showsignup"
              active-class="active"
              >Signup</router-link
            >
          </li>
        </ul>
      </div>

      <div class="popup-menu-toggle-sm">
        <button
          @click="showPopUpMenu = !showPopUpMenu"
          v-if="!showPopUpMenu"
          aria-haspopup="true"
        >
          <menu-icon />
        </button>
        <button
          @click="showPopUpMenu = !showPopUpMenu"
          v-if="showPopUpMenu"
          aria-expanded="true"
        >
          <x-icon size="2x" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "vue-feather-icons";

export default {
  components: {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    ChevronUpIcon
  },
  data() {
    return {
      showPopUpMenu: false,
      hover: false,
      showDropdown: false
    };
  }
};
</script>

<style lang="scss">
header {
  padding: 0 16px;
}

nav {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1088px;
  min-height: 48px;

  ul > li > a {
    background-color: transparent;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }
}

// Logo styles

.logo {
  position: absolute;
  z-index: 30;
  top: 0.5rem;

  &-sm {
    display: block;

    @media (min-width: 480px) {
      display: none;
    }
  }

  &-bg {
    display: none;

    @media (min-width: 480px) {
      display: block;
    }
  }
}

// Small screen (sm) menu styles

.popup-menu-sm {
  position: absolute;
  left: 0;
  top: 2.5em;
  width: 100%;
  opacity: 0;
  font-size: 16px;
  padding: 1rem;
  background-color: #fff;

  ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  a {
    color: #575757;
  }

  button {
    line-height: 55.5px;
  }

  .dropdown-sm {
    padding-left: 1em;
  }

  @media (min-width: 761px) {
    display: none;
  }
}

.show-popup-menu-sm {
  opacity: 1;
}

.popup-menu-link-sm {
  border-bottom: 1px solid #dedede;

  a {
    line-height: 51.5px;

    &.active {
      color: red;
    }
  }
}

.popup-menu-toggle-sm {
  position: absolute;
  z-index: 30;
  right: 0;
  margin-right: 1.2rem;

  button {
    background-color: transparent;
    border-right: none;
    border-left: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    padding: 7.2px 12px;
  }

  @media (min-width: 761px) {
    display: none;
  }
}

.popup-menu-auth-link-sm {
  text-align: center;
  border: 1.5px solid #999999;
  border-radius: 0.5rem;
  min-height: 2.5rem;
  margin-top: 1rem;

  a {
    line-height: 36px;
    font-weight: bold;
    color: #1f1f1f;
  }
}

// Big Screen (bg) menu styles

.menu-items {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 3rem;

  a {
    color: #575757;

    @media (min-width: 961px) {
      line-height: 60px;

      &:hover,
      &.active {
        background-color: #fafafa;
        border-bottom: 2px solid #e44232;
      }
    }
  }

  button {
    color: #575757;

    @media (min-width: 961px) {
      font-size: 18px;
      line-height: 62px;
    }
  }

  &-bg {
    display: none;

    @media (min-width: 961px) {
      display: flex;
    }
  }

  @media (min-width: 961px) {
    font-size: 18px;
    justify-content: space-between;
    padding-right: 0;
  }
}

.register-action {
  background-color: #ee5254;
  border-color: #ee5254;

  a {
    color: #fff;
  }
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 0 16px;
  font-size: 15px;
  line-height: 44px;

  svg {
    color: #ababab;
    padding-right: 2px;
  }

  &-bg {
    svg {
      margin-left: 4px;
    }

    &:hover {
      background-color: #fafafa;
      border-bottom: 2px solid red;
    }
  }
}

// Menu auth styles

.menu-auth {
  display: flex;
  justify-content: space-between;
}

a.signup-action {
  color: #e44232;
}

// Dropdown element in big screen styles

.dropdown-bg {
  position: absolute;
  z-index: 22;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #dedede;
  overflow: auto;
  border-radius: 4px;
  opacity: 0;
  max-height: calc(100vh - 5rem);
  width: 350px;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border: none;

    &:hover {
      background-color: #fafafa;
      border: none;
    }
  }

  li:first-child a {
    padding: 1.2rem 1.5rem;
  }

  hr {
    color: rgba(0, 0, 0, 0.14);
    margin: 0.25rem 1.5rem;
  }

  span {
    display: inline-block;
  }
}

.dropdown-parent-bg:hover > .dropdown-bg {
  opacity: 1;
}

.dropdown-link-headliner {
  color: #1f1f1f;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.dropdown-link-text {
  color: #575757;
  font-size: 0.95rem;
  line-height: 150%;
  letter-spacing: 0.02rem;
}
</style>
