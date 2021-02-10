<template>
  <div
    :class="{'reason-component--type--cons': !isPro}"
    class="reason-component reason"
  >
    <table class="reason__table">
      <tr class="reason__row">
        <td class="reason__cell reason__delete-cell">
          <button-delete-component
            class="reason__delete"
            @clickOnDeleteBtn="deleteExistingReason(reason.id)"
          />
        </td>
        <td class="reason__cell reason__name-cell">
          <div class="reason__name">{{ reason.name }}</div>
        </td>
        <td class="reason__cell reason__value-cell">
          <div class="reason__value">{{ reason.value }}
            <span
              v-if="reason.probability < 100"
              class="reason__probability"
            >({{ reason.probability }} %)</span>
          </div>
        </td>
      </tr>
    </table>
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
      if (this.isPro) {
        this.DELETE_PRO(reasonId);
      } else {
        this.DELETE_CON(reasonId);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reason__table {
  width: 100%;
}

.reason__delete-cell {
  width: 20px;
}

.reason__name-cell {
  width: 80%;
}

.reason__value-cell {
  text-align: left;
}

.reason__delete {
  width: 20px;
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
  font-size: var(--font-size-extra-small);
}
</style>
