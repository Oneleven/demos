window.$=function(selector){
    let array = []
    if(typeof selector === 'string'){
        let items = document.querySelectorAll(selector)
    for(var i=0;i<items.length ;i++){
       array.push(items[i]) 
      }
    }else if(selector instanceof Element){
        array.push(selector)
    }else if(selector instanceof Array){
        for(var i=0;i<selector.length;i++){
            array.push(selector[i])
        }      
    }
    
    array.on = function(eventType,fn){
        for(var i=0;i<array.length;i++){
            array[i].addEventListener(eventType,fn)
        }
       
    }
    array.addClass = function(className){
        for(var i=0;i<array.length;i++){
            array[i].classList.add(className)
        }
       return array
    }
    array.removeClass = function(className){
        for(var i=0;i<array.length;i++){
            array[i].classList.remove(className)
        }
        
    }

    array.text = function(value){
        if(value !== undefined){
           for(var i=0;i<array.length;i++){
                array[i].textContent = value 
           }
          }else{
               let result = []
               for(var i=0;i<array.length;i++){
                 result.push(array[i].textContent)  
               }  
               return result      
           }
                
    }

    array.get = function(index){
        return array[index]
    }

    array.end = function(){
        return array.previousSelector
    }

    array.siblings = function(){
        let children = array[0].parentNode.children
        let result_1 = []
        for(var i=0;i<children.length;i++){
            if(children[i] !== array[0]){
                result_1.push(children[i])
            }          
        }
        let items = $(result_1)
        items.previousSelector = array
        return items         //返回上面声明过api的数组
    }


     return array
    
}