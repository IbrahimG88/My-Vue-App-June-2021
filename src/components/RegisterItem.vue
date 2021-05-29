<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Item Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.itemName"
          placeholder="Enter item name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
        ></b-form-select>
          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="newCategory">Add new category</b-form-checkbox>
          </b-form-checkbox-group>
      </b-form-group>

        <b-form-input
          v-show="form.checked.includes('newCategory')"
          id="input-3"
          v-model="form.food"
          placeholder="Enter food if not in options"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    {{ foods }}
  </div>
</template>

<script>
export default {
  name: "RegisterItem",
  data() {
    return {
      form: {
        itemName: " ",
        food: " ",
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if(!this.foods.includes(this.form.food)) {
      this.foods.push(this.form.food);
      }
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.itemName = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
</style>

<!--
add a catigory that can be added using a checkbox add a category or choose
one
-->