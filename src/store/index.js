import Vue from "vue";
import Vuex from "vuex";
import dummyData from "./dummyData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    edit: { status: false, id: null },
    invoices: [...dummyData],
    filter: [],
  },
  mutations: {
    SET_MENU_IS_OPEN(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    SET_EDIT(state, payload) {
      state.edit = { ...payload };
    },
    SET_INVOICES(state, payload) {
      state.invoices.push(payload);
    },
    SET_FILTER(state, payload) {
      state.filter = payload;
    },
    DELETE_INVOICE(state, payload) {
      state.invoices.splice(payload, 1);
    },
    MARK_INVOICE(state, payload) {
      state.invoices[payload].status = "Paid";
    },
    INVOICE_UPDATE(state, payload) {
      state.invoices.splice(payload.index, 1, { ...payload.info });
    },
  },
  actions: {
    //Getting data from the API, it is in a format of Object of Objects so we re-format it to be Array of Objects
    // fetchStockData(context) {
    //   fetch(
    //     `https://alpha-vantage.p.rapidapi.com/query?function=${context.state.timeSeries}&symbol=${context.state.searchInput}&//datatype=json`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    //         "x-rapidapi-key": process.env.VUE_APP_API_KEY,
    //       },
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((res) => {
    //       //Getting the result Object and re-formatting it as an Array of Objects to make it easier to work with
    //       let arrayData = Object.keys(res[context.getters.timeSeriesName]).map(
    //         (item) => ({
    //           [item]: res[context.getters.timeSeriesName][item],
    //         })
    //       );
    //       //Getting just the last 100 items in the data to make it easier to work with
    //       arrayData = arrayData.slice(0, 100);
    //       context.commit("SET_STOCK_DATA", arrayData);
    //     })
    //     .catch((err) => {
    //       context.commit("SET_ALERT_STATUS", {
    //         status: true,
    //         message:
    //           "You exceeded API query limit. Please wait for a minute and try again.",
    //       });
    //       context.commit("SET_ROUTE_CHANGE_ARRAY", {
    //         name: `API Query Limit Exceeded - ${new Date().toLocaleString(
    //           "en-US"
    //         )}`,
    //         query: true,
    //       });
    //       console.error(err);
    //     });
    // },
  },
  getters: {
    filteredInvoices(state) {
      if (state.filter.length === 0) return state.invoices;
      else {
        let filtered = state.invoices.filter((item) =>
          state.filter.includes(item.status)
        );
        return filtered;
      }
    },
  },
});
