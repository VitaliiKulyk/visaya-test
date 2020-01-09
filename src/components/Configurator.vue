<template>
  <div class="row">
    <div class="large-5 columns">
      <img class="thumbnail" src="https://placehold.it/650x350" />
      <div class="row small-up-4">
        <div class="column">
          <img class="thumbnail" src="https://placehold.it/250x200" />
        </div>
        <div class="column">
          <img class="thumbnail" src="https://placehold.it/250x200" />
        </div>
        <div class="column">
          <img class="thumbnail" src="https://placehold.it/250x200" />
        </div>
        <div class="column">
          <img class="thumbnail" src="https://placehold.it/250x200" />
        </div>
      </div>
    </div>
    <div class="large-7 columns">
      <h3>My Awesome Product</h3>
      <p>
        Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
        pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
        aliquet egestas purus in.
      </p>

      <div
        v-for="(option, oi) in config.options"
        :key="oi"
        class="row small-up-3 medium-up-4 large-up-4 align-center"
      >
        <h5>{{option.title}}</h5>
        <div v-for="(value, vi) in option.values" :key="vi" class="column">
          <div class="card" :class="{'selected': isSelected(value.option_type_id)}">
            <div class="card-section">{{value.title}}</div>
            <div class="card-section optionTypeText">{{value.option_type_id}}</div>
            <button
              v-if="!isOptionDisabled(value.option_type_id)"
              class="button expanded"
              :class="{hollow: !isSelected(value.option_type_id) }"
              v-on:click="select(value.option_type_id, option)"
            >{{isSelected(value.option_type_id) ? 'Selected': 'Select'}}</button>
            <a v-else class="hollow button disabled expanded" href="#" aria-disabled>Select</a>
          </div>
        </div>
      </div>

      <a href="#" class="button large expanded" :class="{disabled:isBuyButtonDisabled()}">Buy Now</a>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import config from "../options.json";

export default {
  name: "Configurator",
  data() {
    return {
      config,
      selectedOptionIds: []
    };
  },
  created() {},
  methods: {
    isOptionDisabled(optionIdValue) {
      var result = _.some(this.config.exclusions, exclusion => {
        var optionIds = _.keys(exclusion);
        if (!_.includes(optionIds, optionIdValue)) return false; // here is no rule for value exclusions

        var optionIdsToCheck = _.without(optionIds, optionIdValue);
        var allChecked = _.every(optionIdsToCheck, o =>
          _.includes(this.selectedOptionIds, o)
        );

        return allChecked;
      });
      return result;
    },
    isSelected(optionId) {
      return _.includes(this.selectedOptionIds, optionId);
    },
    isBuyButtonDisabled() {
      return !_.every(config.options, option => {
        return _.some(option.values, value => {
          return _.includes(this.selectedOptionIds, value.option_type_id);
        });
      });
    },
    select(optionId, option) {
      if (_.includes(this.selectedOptionIds, optionId))
        this.selectedOptionIds = _.without(this.selectedOptionIds, optionId);
      else {
        var optionsToRemove = _.map(option.values, v => v.option_type_id);

        this.selectedOptionIds = _.without(
          this.selectedOptionIds,
          ...optionsToRemove
        );

        this.selectedOptionIds.push(optionId);
      }
    }
  }
};
</script>


<style scoped>
.card {
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  padding: 2px;
}

.card.selected {
  border: 1px solid #d6d6d6;
}

.optionTypeText {
  margin-top: auto;
  font-size: 11px;
}

.button {
  margin-bottom: 0;
}

.row {
  padding-bottom: 20px;
}
</style>
