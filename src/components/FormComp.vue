<template>
  <transition name="slide-fade">
    <div class="form-container" v-show="menuIsOpen">
      <h2>New Invoice</h2>
      <form class="form">
        <h3>Bill From</h3>
        <div class="input-item">
          <label
            class="form__label"
            :class="{
              error: $v.invoiceForm.adress.$error,
            }"
            for="street"
          >
            Street Adress
          </label>
          <input
            class="form__input"
            :class="{
              errorborder: $v.invoiceForm.adress.$error,
            }"
            v-model.trim="$v.invoiceForm.adress.$model"
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div class="input-group">
          <div class="input-item">
            <label
              class="form__label"
              :class="{
                error: $v.invoiceForm.city.$error,
              }"
              for="city"
            >
              City
            </label>
            <input
              class="form__input"
              :class="{
                errorborder: $v.invoiceForm.city.$error,
              }"
              v-model.trim="$v.invoiceForm.city.$model"
              type="text"
              name="city"
              id="city"
            />
          </div>
          <div class="input-item">
            <label
              class="form__label"
              :class="{
                error: $v.invoiceForm.postCode.$error,
              }"
              for="postcode"
            >
              Post Code
            </label>
            <input
              class="form__input"
              :class="{
                errorborder: $v.invoiceForm.postCode.$error,
              }"
              v-model.trim="$v.invoiceForm.postCode.$model"
              type="text"
              name="postCode"
              id="postcode"
            />
          </div>
          <div class="input-item">
            <label
              class="form__label"
              :class="{
                error: $v.invoiceForm.country.$error,
              }"
              for="country"
            >
              Country
            </label>
            <input
              class="form__input"
              :class="{
                errorborder: $v.invoiceForm.country.$error,
              }"
              v-model.trim="$v.invoiceForm.country.$model"
              type="text"
              name="country"
              id="country"
            />
          </div>
        </div>
        <h3>Bill To</h3>
        <div class="input-item">
          <label
            class="form__label"
            :class="{
              error: $v.invoiceForm.clientName.$error,
            }"
            for="client-name"
          >
            Client's Name
          </label>
          <input
            class="form__input"
            :class="{
              errorborder: $v.invoiceForm.clientName.$error,
            }"
            v-model.trim="$v.invoiceForm.clientName.$model"
            type="text"
            name="clientName"
            id="name"
          />
        </div>

        <div class="input-item">
          <label
            class="form__label"
            :class="{
              error: $v.invoiceForm.clientEmail.$error,
            }"
            for="client-email"
          >
            Client's Email
          </label>
          <input
            class="form__input"
            :class="{
              errorborder: $v.invoiceForm.clientEmail.$error,
            }"
            v-model.trim="$v.invoiceForm.clientEmail.$model"
            type="email"
            name="clientEmail"
            id="client-email"
          />
        </div>

        <div class="input-item">
          <label
            class="form__label"
            :class="{
              error: $v.invoiceForm.clientAdress.$error,
            }"
            for="client-street"
          >
            Client's Adress
          </label>
          <input
            class="form__input"
            :class="{
              errorborder: $v.invoiceForm.clientAdress.$error,
            }"
            v-model.trim="$v.invoiceForm.clientAdress.$model"
            type="text"
            name="clientStreet"
            id="client-street"
          />
        </div>

        <div class="input-group">
          <div class="input-item">
            <label
              class="form__label"
              :class="{
                error: $v.invoiceForm.clientCity.$error,
              }"
              for="client-city"
            >
              City
            </label>
            <input
              class="form__input"
              :class="{
                errorborder: $v.invoiceForm.clientCity.$error,
              }"
              v-model.trim="$v.invoiceForm.clientCity.$model"
              type="text"
              name="clientCity"
              id="client-city"
            />
          </div>
          <div class="input-item">
            <label
              class="form__label"
              :class="{
                error: $v.invoiceForm.clientPostCode.$error,
              }"
              for="client-postcode"
            >
              Post Code
            </label>
            <input
              class="form__input"
              :class="{
                errorborder: $v.invoiceForm.clientPostCode.$error,
              }"
              v-model.trim="$v.invoiceForm.clientPostCode.$model"
              type="text"
              name="clientPostcode"
              id="client-postcode"
            />
          </div>
          <div class="input-item">
            <label
              class="form__label"
              :class="{
                error: $v.invoiceForm.clientCountry.$error,
              }"
              for="client-country"
            >
              Country
            </label>
            <input
              class="form__input"
              :class="{
                errorborder: $v.invoiceForm.clientCountry.$error,
              }"
              v-model.trim="$v.invoiceForm.clientCountry.$model"
              type="text"
              name="clientCountry"
              id="client-country"
            />
          </div>
        </div>
        <div class="input-group">
          <div class="input-item" style="width: 47%">
            <label for="invoice-date"> Invoice Date </label>
            <input
              v-model="invoiceForm.invoiceDate"
              type="date"
              name="invoiceDate"
              id="invoice-date"
            />
          </div>
          <div class="input-item" style="width: 47%">
            <label for="payment-term"> Payment Term </label>
            <select
              v-model="invoiceForm.paymentTerm"
              name="paymentTerm"
              id="payment-term"
            >
              <option value="one">Next 1 Day</option>
              <option value="seven">Next 7 Days</option>
              <option value="fourteen">Next 14 Days</option>
              <option value="thirty" checked>Next 30 Days</option>
            </select>
          </div>
        </div>
        <div class="input-item">
          <label
            class="form__label"
            :class="{
              error: $v.invoiceForm.projectDesc.$error,
            }"
            for="desc"
          >
            Project Description
          </label>
          <input
            class="form__input"
            :class="{
              errorborder: $v.invoiceForm.projectDesc.$error,
            }"
            v-model.trim="$v.invoiceForm.projectDesc.$model"
            type="text"
            name="desc"
            id="desc"
          />
        </div>
        <div>
          <h2>Item List</h2>
          <div class="added-projects">
            <div
              class="project-labels"
              v-show="invoiceForm.projects.length > 0"
            >
              <label id="label-name">Item Name</label>
              <label id="label-qty">Qty.</label>
              <label id="label-price">Price</label>
              <label id="label-total">Total</label>
            </div>
            <div
              v-for="(item, index) in invoiceForm.projects"
              :key="index"
              class="added-projects-info"
            >
              <div class="added-project-name">{{ item.name }}</div>
              <div class="added-project-qty">{{ item.quantity }}</div>
              <div class="added-project-price">{{ item.price }}</div>
              <div class="added-project-total">
                <span class="price-symbol">&#8378;</span>{{ item.total }}
              </div>
              <div class="">
                <svg
                  class="project-delete"
                  color="hsl(232, 23%, 61%)"
                  viewBox="0 0 1024 1024"
                  style="stroke: currentcolor; fill: currentcolor"
                  @click="deleteProject(index)"
                >
                  <path
                    d="M837.312 227.584v682.624c0 62.848-50.88 113.792-113.728 113.792h-455.168c-62.81 0-113.728-50.918-113.728-113.728 0-0.023 0-0.045 0-0.068l-0 0.004v-682.624h682.624zM638.272 0l56.832 56.896h199.104v113.792h-796.416v-113.792h199.040l57.024-56.896h284.416z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="input-group" id="project">
            <div class="input-item" id="project-name">
              <label
                :class="{
                  error: $v.invoiceForm.projects.$error,
                }"
                for="item-name"
              >
                Item Name
              </label>
              <input
                :class="{
                  errorborder: $v.invoiceForm.projects.$error,
                }"
                v-model="projectItem.name"
                ref="nextInput"
                type="text"
                name="itemName"
                id="item-name"
              />
            </div>
            <div class="input-item" id="project-qty">
              <label for="quantity"> Qty. </label>
              <input
                v-model="projectItem.quantity"
                type="number"
                name="quantity"
                id="quantity"
              />
            </div>
            <div class="input-item" id="project-price">
              <label
                :class="{
                  error: $v.invoiceForm.projects.$error,
                }"
                for="price"
              >
                Price
              </label>
              <input
                :class="{
                  errorborder: $v.invoiceForm.projects.$error,
                }"
                v-model="projectItem.price"
                type="number"
                name="price"
                id="price"
              />
            </div>
            <div class="input-item" id="project-total">
              <label for="total"> Total </label>
              <div id="total">
                <span class="price-symbol">&#8378;</span>{{ projectItemTotal }}
              </div>
            </div>
          </div>
          <button class="btn-add-item" @click.prevent="addNewProject">
            Add New Item
          </button>
        </div>
      </form>
      <div class="btn-container">
        <button class="btn-discard" @click="SET_MENU_IS_OPEN">Discard</button>
        <div>
          <button v-show="!edit.status" class="btn-draft" @click="saveAsDraft">
            Save as Draft
          </button>
          <button v-show="!edit.status" class="btn-save" @click="save">
            Save & Send
          </button>
          <button v-show="edit.status" class="btn-save" @click="update">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { FormValidation } from "../mixins/FormValidation";

export default {
  name: "FormComp",
  data() {
    return {
      invoiceForm: {
        id: null,
        adress: null,
        city: null,
        postCode: null,
        country: null,
        clientName: null,
        clientEmail: null,
        clientAdress: null,
        clientCity: null,
        clientPostCode: null,
        clientCountry: null,
        invoiceDate: new Date(Date.now()).toISOString().slice(0, 10),
        invoiceDue: null,
        paymentTerm: "seven",
        projectDesc: null,
        projects: [],
        totalPrice: null,
        status: "pending",
      },
      projectItem: {
        name: null,
        quantity: 1,
        price: null,
        total: null,
      },
    };
  },
  mixins: [FormValidation],
  computed: {
    ...mapState(["menuIsOpen", "invoices", "edit"]),
    projectItemTotal() {
      return this.projectItem.quantity * this.projectItem.price;
    },
  },
  methods: {
    ...mapMutations(["SET_MENU_IS_OPEN", "SET_INVOICES", "INVOICE_UPDATE"]),
    focusInput() {
      this.$refs.nextInput.focus();
    },
    addNewProject() {
      this.projectItem.total =
        this.projectItem.quantity * this.projectItem.price;
      let newProject = { ...this.projectItem };
      this.invoiceForm.projects.push(newProject);
      this.projectItem = { name: "", quantity: 1, price: null, total: null };
      this.focusInput();
    },
    deleteProject(i) {
      this.invoiceForm.projects.splice(i, 1);
    },
    saveAsDraft() {
      this.setId();
      this.calculateInvoiceDue();
      this.calculateTotalPrice();
      let newInvoice = {
        ...this.invoiceForm,
        status: "Draft",
      };
      this.SET_INVOICES(newInvoice);
      this.SET_MENU_IS_OPEN();
    },
    save() {
      let validation = this.checkFormValidation();
      if (validation) {
        this.setId();
        this.calculateInvoiceDue();
        this.calculateTotalPrice();
        let newInvoice = {
          ...this.invoiceForm,
          status: "Pending",
        };
        this.SET_INVOICES(newInvoice);
        this.SET_MENU_IS_OPEN();
      }
    },
    update() {
      let validation = this.checkFormValidation();
      if (validation) {
        let index = this.invoices.findIndex((item) => item.id === this.edit.id);
        this.calculateInvoiceDue();
        this.calculateTotalPrice();
        this.invoiceForm.status = "Pending";
        this.INVOICE_UPDATE({ index: index, info: this.invoiceForm });
        this.SET_MENU_IS_OPEN();
      }
    },
    calculateInvoiceDue() {
      let invoiceDate = Date.parse(this.invoiceForm.invoiceDate);
      let paymentTerm =
        this.invoiceForm.paymentTerm === "one"
          ? 86400000
          : this.invoiceForm.paymentTerm === "seven"
          ? 604800000
          : this.invoiceForm.paymentTerm === "fourteen"
          ? 1209600000
          : 2592000000;
      this.invoiceForm.invoiceDue = new Date(invoiceDate + paymentTerm)
        .toISOString()
        .slice(0, 10);
    },
    calculateTotalPrice() {
      let totalPrice = this.invoiceForm.projects.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
      this.invoiceForm.totalPrice = totalPrice;
    },
    setId() {
      let randomId = `${String.fromCharCode(
        Math.floor(Math.random() * (90 - 65 + 1) + 65)
      )}${String.fromCharCode(
        Math.floor(Math.random() * (90 - 65 + 1) + 65)
      )}${Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)}`;
      this.invoiceForm.id = randomId;
    },
    checkFormValidation() {
      if (this.$v.$dirty && !this.$v.$invalid) {
        return true;
      } else {
        this.$v.$touch();
        return false;
      }
    },
  },
  watch: {
    edit() {
      if (this.edit.status) {
        let invoiceToEdit = this.invoices.find(
          (item) => item.id === this.edit.id
        );
        this.invoiceForm = JSON.parse(JSON.stringify(invoiceToEdit));
      } else {
        this.invoiceForm = {
          id: null,
          adress: null,
          city: null,
          postCode: null,
          country: null,
          clientName: null,
          clientEmail: null,
          clientAdress: null,
          clientCity: null,
          clientPostCode: null,
          clientCountry: null,
          invoiceDate: new Date(Date.now()).toISOString().slice(0, 10),
          invoiceDue: null,
          paymentTerm: "seven",
          projectDesc: null,
          projects: [],
          totalPrice: null,
          status: "pending",
        };
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 720px;
  height: 100vh;
  padding: 56px 32px 2rem 129px;
  display: flex;
  flex-direction: column;
  background-color: #141624;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  color: white;
  z-index: 2;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
h3 {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgb(123, 92, 250);
}
form {
  display: flex;
  flex-direction: column;
  padding: 0 24px 10px 10px;
  gap: 24px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
label {
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 12px;
}
input,
select {
  padding: 16px 13px 16px 20px;
  border-radius: 4px;
  border: 1px solid hsl(233, 30%, 21%);
  background-color: hsl(233, 31%, 17%);
  font-weight: 700;
  color: white;
}
select {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-item {
  display: flex;
  flex-direction: column;
}
.input-group {
  display: flex;
  justify-content: space-between;
}
.input-group > .input-item {
  width: 30%;
}
.added-projects {
  margin-bottom: 20px;
}
.project-labels,
.added-projects-info {
  display: flex;
  gap: 15px;
}
.added-projects-info {
  margin-bottom: 10px;
}
#label-name,
.added-project-name {
  flex-basis: 40%;
}
#label-qty,
.added-project-qty {
  flex-basis: 10%;
}
#label-price,
.added-project-price {
  flex-basis: 20%;
}
#label-total,
.added-project-total {
  flex-basis: 20%;
}
.added-project-name,
.added-project-qty,
.added-project-price,
.added-project-total {
  display: flex;
  align-items: center;
  padding: 14px 13px 14px 20px;
  border-radius: 4px;
  border: 1px solid hsl(233, 30%, 21%);
  background-color: hsl(233, 31%, 17%);
  font-weight: 700;
}
#project {
  gap: 16px;
}
#project-name {
  width: 50%;
}
#project-qty {
  width: 10%;
}
#project-price {
  width: 20%;
}
#project-total {
  width: 20%;
}
.project-delete {
  width: 20px;
  padding-top: 14px;
  cursor: pointer;
}
.project-delete:hover {
  color: rgb(255, 86, 86);
}
#total {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  color: white;
}
.price-symbol {
  font-size: 1rem;
  font-weight: 700;
  margin-right: 5px;
}
.btn-container {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-right: 40px;
  padding-left: 10px;
}
button {
  border: none;
  border-radius: 24px;
  cursor: pointer;
  padding: 17px 24px;
  color: white;
  font-weight: 700;
}
.btn-add-item {
  width: 100%;
  background-color: #252946;
  margin-top: 20px;
}
.btn-discard {
  background-color: #252946;
}
.btn-draft {
  background-color: #373b53;
}
.btn-save {
  background-color: #7b5cfa;
  margin-left: 5px;
}

/* Transition Effects for the component starts here */
.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-700px);
}

/* Custom Scrollbar Styling Starts Here */
::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #141624;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #252946;
  border-radius: 20px;
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.error {
  color: red;
}
.errorborder {
  border: 1px solid red;
}

@media screen and (max-width: 1024px) {
  .form-container {
    top: 80px;
    width: 100vw;
    height: 100vh;
    padding: 20px 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  h3 {
    font-size: 0.75rem;
  }
  form {
    padding: 0 10px 10px 10px;
    gap: 16px;
  }
  label {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
  input,
  select {
    padding: 10px 8px 10px 8px;
  }
  .added-projects {
    margin-bottom: 10px;
  }
  .project-labels,
  .added-projects-info {
    gap: 10px;
  }
  .added-projects-info {
    margin-bottom: 10px;
  }
  #label-name,
  .added-project-name {
    flex-basis: 40%;
  }
  #label-qty,
  .added-project-qty {
    flex-basis: 10%;
  }
  #label-price,
  .added-project-price {
    flex-basis: 20%;
  }
  #label-total,
  .added-project-total {
    flex-basis: 20%;
  }
  .added-project-name,
  .added-project-qty,
  .added-project-price,
  .added-project-total {
    padding: 8px 6px 8px 6px;
  }
  #project {
    gap: 8px;
  }
  .price-symbol {
    font-size: 0.75rem;
  }
  .btn-container {
    padding-top: 2rem;
    padding-right: 20px;
    padding-left: 5px;
  }
  button {
    padding: 8px 12px;
  }
  .btn-add-item {
    margin-top: 10px;
  }
}
</style>
