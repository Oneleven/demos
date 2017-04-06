  let final = `

时间：2017／4／7 , 7:00 pm
事件：看电影
片名：攻壳机动队
地点：上海保利影城世博店5号POLYMAX厅
路线：南浦大桥--line4--西藏南路--line8--中华艺术宫

明天见

  Δ~~~Δ 
  ξ •ェ• ξ 
  ξ　~  ξ 
  ξ　　  ξ 
  ξ　　　“~～~～〇 
  ξ　　　　　　 ξ 
  ξ　ξ　ξ~～~ξ　ξ 
  　ξ_ξξ_ξ　ξ_ξξ_ξ        good night!

 

` 
  let n = 0
  
  var id = setInterval(function(){
    console.log(n)
    if(n===final.length){
      clearInterval(id)
    }
    n+=1
    code.innerHTML = final.substring(0,n)

  }, 150)
    