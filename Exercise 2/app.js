new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertMe: function() {
      alert('Alert!')
    },
    updateValue: function(event) {
      this.value = event.target.value
    }
  }
});