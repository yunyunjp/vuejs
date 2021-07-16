Vue.filter('toUSD', function(jpy) {
  return jpy / 100
})
Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

Vue.filter('readMore', function(text, length, suffix){
  return text.substring(0, length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    basePrice: 100,
    url: 'https://www.google.co.jp',
    message: 'Hello <span style="color:red;">Vue.js!</span>',
    message2: 'Hello Vue.js!',
    text: 'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.',
    price: 298000000,
    jpyPrice: 298000,
    number: 100,
    ok: false,
    count: 0,
    user: {
      lastName: 'Yamada',
      firstName: 'taro',
      prefecture: 'Tokyo'
    },
    colors: ['Red', 'Green', 'Blue'],
    km: 0,
    m: 0,
    mm: 0
  },
  methods: {
    methodsNumber: function(){
      console.log('methods!')
      return Math.random()
    },
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    },
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  },
  // filters: {
  //   numberFormat: function(value) {
  //     return value.toLocaleString()
  //   }
  // }
  computed: {
    computedNumber: function() {
      console.log('computed!')
      return Math.random()
    },
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    }
  },
  watch: {
    message2: function(newValue, oldValue) {
    console.log('new: %s, old: %s', newValue, oldValue)
    },
    km: function(value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function(value) {
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm: function (value) {
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value 
    }

  }
})