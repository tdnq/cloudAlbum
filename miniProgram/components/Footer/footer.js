// components/Footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    iconPos:0,
    color:["red",""]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    iconPosChange:function(e){
      let index = e.currentTarget.dataset.index;
      if(index===this.data.iconPos){
        return;
      }else{
      }
    }
  }
})
