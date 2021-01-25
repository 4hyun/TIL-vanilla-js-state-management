export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  clearItem(context, payload) {
    console.log("clearitem");
    context.commit("clearItem", payload);
  },
};
