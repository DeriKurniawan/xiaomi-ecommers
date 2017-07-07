var app = new Vue({
  el: '#app',
  data: {
    items: [],
    cart: 0,
    cartlists: [],
    cartlistActuals: [],
    requestDate: '',
    total: 0,
    searchItem: '',
    isLogin: false,
    username: '',
    password: ''
  },
  methods: {
    goSideBar: function(){
      $('#toggle').click(function(){
        $('.ui.sidebar')
        .sidebar('setting', 'transition', 'scale down')
        .sidebar('toggle');
      });
    },
    goSpecialCards: function(){
      $('.special.cards .image').dimmer({
        on: 'hover'
      });
    },
    goCartModalShow: function(){
      $('#cart-modal')
      .modal('setting', 'transition', 'vertical flip')
        .modal('show')
      ;
    },
    showAllItem: function(){
      var self = this;
      axios.get('http://localhost:3000/api/item/')
      .then((response)=>{
        console.log(response);
        self.items = response.data
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    pushToCart: function(id){
      var self=this;
      console.log("ini id di pushToCart", id);
      axios.get(`http://localhost:3000/api/item/${id}`)
      .then((response)=>{
        console.log('thats on cart function------->', response);
        self.cartlists.push(response.data);
        self.getCartCount()
        self.getTotalCount()
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    pushToCartTable: function(id){
      let self = this;
      let lengthArrayOfCartlists = self.cartlists.length
      let quantity = 0
      for (let i=0; i<lengthArrayOfCartlists; i++){
        if(self.cartlists[i]._id === id){
          
        }
      }
    },
    getCartCount: function(){
      let self = this;
      self.cart = self.cartlists.length;
      console.log(self.cartlists);
    },
    getDateNow: function(){
      let self = this;
      let dateNow = new Date()
      self.requestDate = `${dateNow.getDate()} / ${dateNow.getMonth()+1} / ${dateNow.getFullYear()}`;
    },
    getTotalCount: function(){
      let self = this;
      self.cartlists.forEach(function(sum){
        self.total += sum.price;
      })
      console.log("ini jumlah total---->", self.total);
    },
    getCartEmpty: function(){
      let self = this;
      self.cartlists.splice(0, self.cart);
      self.getCartCount()
      self.total = 0;
    },
    showSearchItem: function(){
      let self = this;
      if (self.searchItem === '') {
        self.showAllItem()
      } else {
        axios.get(`http://localhost:3000/api/item/search/${self.searchItem}`)
        .then((response)=>{
          console.log(response);
          self.items = response.data
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    },
    showByCategory: function(category){
      let self = this;
      axios.get(`http://localhost:3000/api/item/categories/${category}`)
      .then((response)=>{
        console.log(response);
        self.items = response.data
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    goSignInPopUp: function(){
      $('#login-modal')
      .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    }
  },
  created () {
    this.showAllItem()
    this.getCartCount()
    this.getDateNow()
  }
})
