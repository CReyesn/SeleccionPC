$(document).ready(function(){
    var tipo,placa,presupuesto,refrigeracion,tamaño,luces
    
    $('.intel').click(function(){
        
        placa="intel"
            
    })
    $('.amd').click(function(){
        
        placa="amd"
            
    })
    
    $('.of').click(function(){
        
        tipo="of"
            
    })
    $('.gamer').click(function(){
        
        tipo="gamer"
            
    })
    $('.edicion').click(function(){
        
        tipo="edicion"
            
    })


    $('.eco').click(function(){
        
        presupuesto="eco"
            
    })
    $('.mid').click(function(){
        
        presupuesto="mid"
            
    })
    $('.best').click(function(){
        
        presupuesto="best"
            
    })


    $('.aire').click(function(){
        
        refrigeracion="aire"
            
    })
    $('.liq').click(function(){
        
        refrigeracion="liq"
            
    })


    $('.micro').click(function(){
        
        tamaño="micro"
            
    })
    $('.atx').click(function(){
        
        tamaño="atx"
            
    })
    $('.exAtx').click(function(){
        
        tamaño="exAtx"
            
    })

    $('.RGB').click(function(){
        
        luces="RGB"
            
    })
    $('.noRGB').click(function(){
        
        luces="noRGB"
            
    })
    

    let miBoton = document.getElementById("formulario");
    miBoton.addEventListener("submit", function(event) {
    event.preventDefault()
        /*if(tipo=="gamer"){
            if(presupuesto=="eco"){
                alert("GAMER & ECONOMICO")
                $(".imagen").attr("src","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIn-eaQ-y0-8qjPraC2XPf8WdmyoHJTgwsdSGPuNfvbzGcAKKI2kXoMzywLPpNR-LxUaa0JnayLeU&usqp=CAc")
           
            }else{
                alert("GAMER & LO MEJOR")
                $(".imagen").attr("src","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEc2cX59I471nfa9humqRfa9kB-JvHAhp1jHn91Y4kne0bsncwPnZ2VjBc-vsqDsQj755OJyzwxwct8c090A9hPKGfKUxINV9Day9_ICes&usqp=CAc")
            }
            
        }else{
            if(presupuesto=="eco"){
                alert("OFIMATICA & ECONOMICO")
                $(".imagen").attr("src","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSE2Mv_5hFJeDx0qvwwmA_LnZOExdRTgd3PdXN8qJFZ--NEr-E1VwIB3RbM4cG4KaAz4ew1CGhVnNkH&usqp=CAc")
            }else{
                alert("OFIMATICA & LO MEJOR")
                $(".imagen").attr("src","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTECbnDDnGPwwd8B9Q3SFuV5T8oC2TaN1RvGYO84B4esUIMjRrLFNzRhjVGi9cGdepneT4xS89Qig&usqp=CAc")
           
            }
        }
        */
        switch(placa){

            case "intel":{
                switch(tipo){
                    case "of":{
                        switch(presupuesto){
                            case "eco":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":{
                                                        alert("Intel,of,eco,aire,micro,RGB")
                                                        break;
                                                    }
                                                    case "noRGB":{
                                                        alert("Intel,of,eco,aire,micro,NO-RGB")
                                                        break;
                                                    }     
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "mid":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "best":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }        
                        }
                    }
                    case "gamer":{
                        switch(presupuesto){
                            case "eco":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "mid":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "best":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }        
                        }
                    }
                    case "edicion":{
                        switch(presupuesto){
                            case "eco":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "mid":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "best":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }        
                        }
                    }    
                }


            }
            case "adm":{
                switch(tipo){
                    case "of":{
                        switch(presupuesto){
                            case "eco":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "mid":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "best":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }        
                        }
                    }
                    case "gamer":{
                        switch(presupuesto){
                            case "eco":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "mid":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "best":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }        
                        }
                    }
                    case "edicion":{
                        switch(presupuesto){
                            case "eco":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "mid":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }
                            case "best":{
                                switch(refrigeracion){
                                    case "aire":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }
                                    case "agua":{
                                        switch(tamaño){
                                            case "micro":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "atx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }
                                            case "exAtx":{
                                                switch(luces){
                                                    case "RGB":
                                                    case "noRGB":    
                                                }
                                            }       
                                        }
                                    }   
                                }
                            }        
                        }
                    }    
                }
            }
        }


    })
    
})





