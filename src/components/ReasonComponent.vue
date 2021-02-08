<template>
  <div
    :class="{'reason-component--type--cons': !isPro}"
    class="reason-component reason"
  >
    <button-delete-component
      class="reason__delete"
      :data-id="reason.id"
      @clickOnDeleteBtn="deleteExistingReason(reason.id)"
    />
    <div class="reason__name">{{ reason.name }}</div>
    <div class="reason__value">{{ reason.value }}
      <span
        class="reason__probability"
        v-if="reason.probability < 100"
      >({{ reason.probability }} %)</span>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import ButtonDeleteComponent from './ButtonDeleteComponent.vue';

export default {
  name: 'ReasonComponent',
  components: { ButtonDeleteComponent },
  props: {
    isPro: {
      type: Boolean,
      default: true,
    },
    reason: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['DELETE_PRO', 'DELETE_CON']),
    deleteExistingReason(reasonId) {
      if (this.isPro) this.DELETE_PRO(reasonId);
      else this.DELETE_CON(reasonId);
    },
  },
};
</script>

<style lang="scss" scoped>
.reason-component {
  display: flex;
}

.reason__delete {
  margin-right: 3%;
  min-width: 10px;
  max-width: unset;
}

.reason__name {
  width: 70%;
  margin-right: 3%;
}

.reason__value {
  color: var(--button-positive-color);
  white-space: nowrap;
}

.reason-component--type--cons {
  .reason__value {
    color: var(--button-negative-color);
  }
}

.reason__probability {
  color: var(--dark-font-color);
  font-size: 12px;
}
</style>
