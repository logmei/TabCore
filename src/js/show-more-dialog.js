/**
 * 
 * @param {
 * bandId:绑定id
 * bandDialogClass:需要显示内容的dialog的className
 * } param0 
 */

function ShowMoreDialog({bandId,bandDialogClass}={}){
  this.publicdialogName = 'more_dialog'
  this.id = bandId
  this.className = bandDialogClass
  this.dialogIndex = 0
  this.existed = false
  this.visible = false
  this.content = ''
 
}
ShowMoreDialog.prototype.init = function(){
  var that = this
  document.getElementById(this.id).addEventListener('click',function(e){
    if(e.target.className === that.className){
      that.content = e.target.innerText
      that.show()
      // 绑定弹框事件
      that.bandDialogListener()
    }
  })
}

ShowMoreDialog.prototype.bandDialogListener = function(){
  var that = this
  document.getElementById(this.publicdialogName+this.dialogIndex).addEventListener('click',function(e){
    if(e.target.id === that.publicdialogName+that.dialogIndex){
      that.hide(that.dialogIndex)
    }
  })
}

ShowMoreDialog.prototype.createDialog = function(content){
  this.dialogIndex += 1
  var contentElement = {
    tagName:'div',
    attributes:{
      id:this.publicdialogName+this.dialogIndex,
      className:this.publicdialogName
    },
    child:[
      // {
      //   tagName:'div',
      //   attributes:{
      //     id:this.publicdialogName+'_back_'+this.dialogIndex,
      //     className:this.publicdialogName+'_back'
      //   },
      // },
      {
        tagName:'div',
        attributes:{
          id:this.publicdialogName+'_content_'+this.dialogIndex,
          className:this.publicdialogName+'_content',
        },
        textNode:content
      }
    ]
  }
  var ele = CreateElementByObj(contentElement)
  document.body.append(ele)
  this.existed = true
  this.visible = false
  
}

ShowMoreDialog.prototype.show = function(index,callback){
  if(!this.existed){
     index = this.createDialog(this.content)
  }
  index =  index || this.dialogIndex
  this.visible = true
  document.getElementById(this.publicdialogName+'_content_'+this.dialogIndex).innerText=this.content
  document.getElementById(this.publicdialogName+index).style.display='flex'
  if(callback) callback()
  
}

ShowMoreDialog.prototype.hide = function(index){
 this.visible = false
 document.getElementById(this.publicdialogName+index).style.display='none'
}

ShowMoreDialog.prototype.remove = function(index){
  var ele = document.getElementById(this.publicdialogName+index)
  body.removeChild(ele)
  this.visible = false
  this.dialogIndex--
  this.existed = false                                                                                                            
}

function CreateElementByObj({tagName,attributes,textNode,child}){
  var ele = document.createElement(tagName)
  if(attributes){
    for(var key in attributes){
      ele[key] = attributes.key
    }
  }
  if(textNode){
    var t = document.createTextNode(textNode)
    ele.appendChild(t)
  }
  
  if(!child) return ele
  if(Array.isArray(child)){
    for(var i = 0;i<child.length;i++){
      var e = CreateElementByObj(child[i])
      ele.appendChild(e)
    }
  }else{
    var e = CreateElementByObj(child)
    ele.appendChild(e)
  }
  return ele
  
}


export default ShowMoreDialog