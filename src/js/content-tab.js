/**
 * 
 * @param {
 * initIndex:初始化选中index 默认0
 * id:tab父组件id 默认nav
 * selectedClassName:选中时的className  默认selected
 * contentClassName:联控内容样式名称 默认tabs-content
 * displayName：display类型 默认block
 * hiddenType:隐藏类型 'display'|'visibility' 默认display
 * zIndex:显示后的zIndex 默认0  hiddenType为visibility时显示的zIndex的值
 * } param0 
 */
function ContentTab({initIndex,id,selectedClassName,contentClassName,displayName,hiddenType,defaultZIndex}={}){
  this.id = id || 'nav'
  this.selectedClassName = selectedClassName || 'selected'
  this.navList = getTitles(this.id)
  this.selectedIndex = initIndex?initIndex-1:0
  this.contentClassName = contentClassName || 'tabs-content'
  this.displayName = displayName || 'block'
  this.hiddenType = hiddenType || 'display' // 'visibility'
  this.zIndex = defaultZIndex || 0 
  this.eventsTriger = 3
  Object.entries(this).forEach(e=>console.log(e))
}
/**
 * 初始化点击事件
 * eventsTriger:触发事件 1：只触发回调，2：触发默认操作和回调，3：只触发默认操作
 * @param {Function} handlerCallback :触发点击后调用的回调函数
 */
ContentTab.prototype.init = function({BandCallbackClassName,BandCallback,eventsTriger=2}={}){
  this.BandCallbackClassName = BandCallbackClassName || this.selectedClassName
  this.BandCallBack = BandCallback
  this.eventsTriger = eventsTriger

  var that = this
  document.getElementById(this.id).addEventListener('click',function(e){
    var index = that.findSelectedIndex(e.target.innerText)
    var eles = document.getElementById(that.id).children
    if(index !== that.selectedIndex){
      that.removeClass( eles[that.selectedIndex])
      that.addClass(eles[index],that.selectedClassName)
      that.handlerContentView(index)
      that.selectedIndex = index
    }
  })

 
}

ContentTab.prototype.initSlider = function({InitCallBack,BandCallBack,sliderId}={}){
  this.sliderId = sliderId || 'slider'
  const that = this
  function initCallBackFun(){
    var e = document.getElementById(that.id).querySelector('.'+that.selectedClassName)
    slider.style.left = e.offsetLeft+'px'
  }

  function BandCallbackFun({BandCallbackClassName,selectedIndex}){
    var e = document.getElementById(that.id).querySelectorAll('span')[selectedIndex]
    if(e.className === BandCallbackClassName){
      var slider = document.getElementById(that.sliderId)
      slider.style.left = e.offsetLeft+'px'
      slider.style.opacity = 1
    }
   }
   if(InitCallBack){
    InitCallBack()
   }else{
    initCallBackFun()
   }

    this.BandCallBack = BandCallBack || BandCallbackFun
}



ContentTab.prototype.handlerContentView = function(index){
  var that = this
  for(var i = 0;i<this.navList.length;i++){
    batchUpdateStyle(i,'hide')
  }
  batchUpdateStyle(index,'show')

  /**
   * 
   * @param {int} ii ：元素索引
   * @param {string} showType :是否显示
   */
  function batchUpdateStyle(ii,showType){
    if(Array.isArray(that.contentClassName)){
      for(var j=0;j<that.contentClassName.length;j++){
        handler(document.getElementsByClassName(that.contentClassName[j]))
      }
    }else {
      handler(document.getElementsByClassName(that.contentClassName))
    }


    function handler(element){
      if((that.eventsTriger == 1 || that.eventsTriger == 2) && typeof that.BandCallBack === 'function'){
        that.BandCallBack({...that,selectedIndex:ii})
      }
      if(that.eventsTriger == 2 || that.eventsTriger == 3){
        var e = element[ii]
        if(e) showOrHide(e,showType,j)
      }
    }
  }

  

  function showOrHide(e,showType,j){
    var hideType = that.hiddenType
    var display = that.displayName
    if(Array.isArray(that.hiddenType)) hideType = that.hiddenType[j]
    if(Array.isArray(that.displayName)) display = that.displayName[j]
    switch (hideType){
      case 'display':
        var display1 = showType==='hide'?'none':display
        e.style.display=display1
        break;
      case 'visibility':
        var show = showType==='hide'?'hidden':'visible'
        var zIndex = showType==='hide'?-1:that.zIndex
        e.style.visibility=show
        e.style.zIndex = zIndex
        break;
      default:;
    }
  }
}

ContentTab.prototype.removeClass = function(ele){
  if(ele.className){
    ele.removeAttribute('class')
  }
}

ContentTab.prototype.addClass = function(ele){
  if(ele.className == undefined){
    ele.setAttribute('class',this.selectedClassName)
  } else {
    ele.className = this.selectedClassName
  }
}

ContentTab.prototype.findSelectedIndex = function(text){
  for(var i=0;i<this.navList.length;i++){
    if(text == this.navList[i]){
      return i
    }
  }
  return this.selectedIndex
}

/**
 * 专门给关于我们做的年份展示那块
 * @param {*} id 
 */
ContentTab.prototype.bandYearsListener = function(id){
  var that = this
  this.yearsMoveNum = 0
  this.yearsMoveAble = false
  this.yearsMoveOffset = 220
  this.yearsMaxMoveNum = this.navList.length - 5+1

  document.getElementById('arrow-left').addEventListener('click',function(e){
    if(that.yearsMoveNum<=0) return
    if(that.yearsMoveNum !== 0){
      that.yearsMoveNum-=1
      move(id,that) 
     
    }
  })

  document.getElementById('arrow-right').addEventListener('click',function(e){
    if(that.yearsMoveNum >=that.yearsMaxMoveNum) return
      that.yearsMoveNum+=1
      move(id,that)
  })
  // 移动
  function move(id,that){
    var parent = document.getElementById(id)
    var eles = parent.querySelectorAll('div')
    var distance = that.yearsMoveNum * that.yearsMoveOffset
    var arr = Array.prototype.slice.call(eles)
    for(var i = 0;i<eles.length;i++){
      arr[i].style.transform=`translateX(-${distance}px)`
    }
    if(that.yearsMoveNum <=0) parent.querySelector('#arrow-left').style.color = 'rgba(133, 133, 133, 0.21)'
    else parent.querySelector('#arrow-left').style.color = '#858585'

    if(that.yearsMoveNum >= that.yearsMaxMoveNum) parent.querySelector('#arrow-right').style.color = 'rgba(133, 133, 133, 0.21)'
    else parent.querySelector('#arrow-right').style.color = '#858585'
  }
}



// 获取tab标题
function getTitles(id){
  var titles = []
  Array.prototype.slice.call(document.getElementById(id).children).forEach(e=>titles.push(e.innerText))
  return titles
}



export default ContentTab;



