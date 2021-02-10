<template>
  <footer class="footer-component">
    <div class="container">
      <div class="copyright">© {{ this.textContent.name }}</div>
      <address class="contacts">
        <ul class="contacts__list">
          <li class="contacts__item">
            <a
              class="contacts__link github-link"
              href="https://github.com/Fanis-Rakhmatullin/decision-helper"
              target="_blank"
            >
              <img
                alt="Лого GitHub"
                class="contacts__img github-link__img"
                src="../assets/svg/github-logo.svg"
              >
            </a>
          </li>
          <li class="contacts__item">
            <a
              class="contacts__link email-link"
              href="mailto:faniskin1@gmail.com"
            >
              <img
                alt="Лого GitHub"
                class="contacts__img email-link__img"
                src="../assets/svg/envelope.svg"
              >
            </a>
          </li>
        </ul>
      </address>
    </div>
  </footer>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'FooterComponent',
  computed: {
    ...mapState({
      textContent: (state) => state.textContent.footer,
    }),
  },
};
</script>

<style lang="scss" scoped>
.footer-component {
  height: 100px;
}

.container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contacts__list {
  display: flex;
  align-items: center;
}

.contacts__item {
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
}

.contacts__img {
  transition: transform 0.5s;
}

.contacts__link {
  &:hover {
    .contacts__img {
      transform: scale(1.2);
    }
  }

  &:focus {
    outline: none;

    .contacts__img {
      transform: scale(1.2);
    }
  }

  &:active {
    .contacts__img {
      transform: scale(1.2);
    }
  }
}
</style>
