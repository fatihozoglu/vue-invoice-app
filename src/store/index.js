import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    searchInput: "",
    stockData: "",
    timeSeries: "TIME_SERIES_DAILY",
    //routeChangeArray keeps the information of navigation and unauthorized navigation attempt data
    routeChangeArray: [],
    //alertStatus is set to true in router/index.js beforeEnter Guard when an unauthorized navigation attempt occures
    alertStatus: {
      status: false,
      message: null,
    },
  },
  mutations: {
    SET_ADMIN(state, payload) {
      state.isAdmin = payload;
    },
    SET_SEARCH_INPUT(state, payload) {
      state.searchInput = payload;
    },
    SET_STOCK_DATA(state, payload) {
      state.stockData = payload;
    },
    SET_TIME_SERIES(state, payload) {
      state.timeSeries = payload;
    },
    SET_ROUTE_CHANGE_ARRAY(state, payload) {
      state.routeChangeArray.push(payload);
    },
    SET_ALERT_STATUS(state, payload) {
      state.alertStatus = { ...state.alertStatus, ...payload };
    },
  },
  actions: {
    //Getting data from the API, it is in a format of Object of Objects so we re-format it to be Array of Objects
    fetchStockData(context) {
      fetch(
        `https://alpha-vantage.p.rapidapi.com/query?function=${context.state.timeSeries}&symbol=${context.state.searchInput}&datatype=json`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key": process.env.VUE_APP_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          //Getting the result Object and re-formatting it as an Array of Objects to make it easier to work with
          let arrayData = Object.keys(res[context.getters.timeSeriesName]).map(
            (item) => ({
              [item]: res[context.getters.timeSeriesName][item],
            })
          );
          //Getting just the last 100 items in the data to make it easier to work with
          arrayData = arrayData.slice(0, 100);
          context.commit("SET_STOCK_DATA", arrayData);
        })
        .catch((err) => {
          context.commit("SET_ALERT_STATUS", {
            status: true,
            message:
              "You exceeded API query limit. Please wait for a minute and try again.",
          });
          context.commit("SET_ROUTE_CHANGE_ARRAY", {
            name: `API Query Limit Exceeded - ${new Date().toLocaleString(
              "en-US"
            )}`,
            query: true,
          });
          console.error(err);
        });
    },
  },
  getters: {
    //Getter function for deciding which time series function will be used based on the selected option in CandlestickChart Component (Daily-Weekly-Monthly)
    timeSeriesName(state) {
      switch (state.timeSeries) {
        case "TIME_SERIES_DAILY":
          return "Time Series (Daily)";
        case "TIME_SERIES_WEEKLY":
          return "Weekly Time Series";
        case "TIME_SERIES_MONTHLY":
          return "Monthly Time Series";
      }
    },
  },
});
