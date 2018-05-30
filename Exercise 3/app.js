new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        watch: {
          result: function(value) {
            var vm = this
            setTimeout(function() {
              vm.value = 0
            }, 5000)
          }
        },
        computed: {
          result: function() {
            return this.value < 37 ? 'not there yet' : 'done'
          }
        }
    });