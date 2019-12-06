<template>
  <div class="container">
    <form>
      <div class="row" style="paddingTop: 20px" v-if="!submitted">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <div class="form-group">
            <div style="display: flex; width: 100%;">
              <div style="width: 50%">
                <label for="name">First Name</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  v-model="userData.firstName"
                />
              </div>
              <div style="width: 50%">
                <label for="name">Last Name</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  v-model="userData.lastName"
                />
              </div>
            </div>
          </div>
          <!-- Mail -->
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email"
            />
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="userData.password"
            />
          </div>
          <!-- Store Data? Yes/No -->
          <label for="store">Store</label>
          <app-switch v-model="userData.store"></app-switch>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <div class="row">
            <div
              class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
              <button class="btn btn-primary" @click.prevent="submitted = true">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.firstName + ' ' + userData.lastName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ userData.store }}</p>
            <div class="row">
              <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
              >
                <button
                  class="btn btn-primary"
                  @click.prevent="submitted = false"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchVue from './Switch.vue';
export default {
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        store: false
      },
      submitted: false
    };
  },
  components: {
    appSwitch: SwitchVue
  }
};
</script>

<style></style>
