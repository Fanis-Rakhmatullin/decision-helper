<template>
  <div class="header-component">
    <div class="container">
      <div class="headline">
        <h1 class="headline__title">Decision helper</h1>
        <h3 class="headline__moto">weigh all pros and cons</h3>
      </div>
      <div class="github">
        <a href="/" class="github__link">
          <img class="github__img" src="../assets/svg/github-logo.svg" alt="Лого GitHub">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
};
</script>

<style scoped lang="scss">
.header-component {
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
}

.headline {
  text-align: left;
}

.headline__title {
  font-size: 60px;
  font-weight: bold;
}

.headline__moto {
  font-size: 24px;
}

.github {
  margin-top: 10px;
}
</style>
