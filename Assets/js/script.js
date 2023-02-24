$(document).ready(function(){
    var tipo,placa,presupuesto
    $(".imgGabinete").hide()
    $(".card").hide()
    $(".imgProce").hide()
    $(".imgPlaca").hide()
    $(".imgRam").hide()
    $(".imgSSD").hide()
    $(".imgGrafica").hide()
    $(".imgFuente").hide()
    


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






    

    let miBoton = document.getElementById("formulario");
    miBoton.addEventListener("submit", function(event) {
    event.preventDefault()
        

        if(placa=="intel"){
            if(tipo=="of"){
                if(presupuesto=="eco"){ //intel of eco
                                    
                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/celeronG5905.jpg")
                                    $(".textProce").html("Procesador: Intel Celeron G5905")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/87887-intel-celeron-g5905-bx80701g5905")
                                    proce=41900
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/87887-intel-celeron-g5905-bx80701g5905")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/ASRockH470M.png")
                                    $(".textPlaca").html("Placa Madre: ASRock H470M-HVS")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")
                                    placa=69990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("Placa Madre: Crucial CT8G4DFRA32A 8GB")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")
                                    ram=18987
                                    $(".linkRam").html("Precio $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")

                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/XTechDeimos.jpg")
                                    $(".textGabinete").html("Gabinete: XTech Deimos (ATX)")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    gabinete=18590
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WDGreen240Gb.webp")
                                    $(".textSSD").html("SSD: Western Digital Green 240 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                                    ssd=14900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")

                                    total=proce+placa+ram+gabinete+ssd+fuente
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                                    
                }else{
                    if(presupuesto=="mid"){ //intel of mid

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei3-10100F.png")
                                    $(".textProce").html("Procesador: Intel Core i3-10100F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")
                                    proce=69690
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/ASRockH470M.png")
                                    $(".textPlaca").html("Placa Madre: ASRock H470M-HVS")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")
                                    placa=69990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial  16Gb (2x8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")
                                    ram=57800
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")


                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/DeepCoolMatrexx.jpg")
                                    $(".textGabinete").html("Gabinete: DeepCool Matrexx 30")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/62689-deepcool-matrexx-30-dp-matx-matrexx30")
                                    gabinete=24990
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/62689-deepcool-matrexx-30-dp-matx-matrexx30")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/ssdWD480Gb.jpg")
                                    $(".textSSD").html("SSD: Western Digital Green 480 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/136354-western-digital-green-480-gb-wds480g3g0a")
                                    ssd=26490
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/136354-western-digital-green-480-gb-wds480g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                    }else{ //intel of best

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei5-10400F.jpg")
                                    $(".textProce").html("Procesador: Intel Core i5-10400F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")
                                    proce=101000
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteB560M.jpg")
                                    $(".textPlaca").html("Placa Madre: Gigabyte B560M")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")
                                    placa=89990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial  32Gb (2 x 16GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")
                                    ram=37676*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")

                                    
                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                                    $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                                    ssd=172960
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))
                    }
                }
            }else{
                if(tipo=="gamer"){
                    if(presupuesto=="eco"){ //intel gamer eco
                        
                                   

                                    $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei3-10100F.png")
                                    $(".textProce").html("Procesador: Intel Core i3-10100F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")
                                    proce=69690
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/ASRockH470M.png")
                                    $(".textPlaca").html("Placa Madre: ASRock H470M-HVS")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")
                                    placa=69990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")


                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 8Gb (2 x 4GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")
                                    ram=14450*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")

                                    
                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/MSIGeForceGTX1650.png")
                                    $(".textGrafica").html("Gráfica: MSI GeForce GTX 1650")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")
                                    grafica=186990
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")


                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/XTechDeimos.jpg")
                                    $(".textGabinete").html("Gabinete: XTech Deimos (ATX)")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    gabinete=18590
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    
                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WDGreen240Gb.webp")
                                    $(".textSSD").html("SSD: Western Digital Green 240 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                                    ssd=14900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                    }else{
                        if(presupuesto=="mid"){ //intel gamer mid

                                    $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei5-10400F.jpg")
                                    $(".textProce").html("Procesador: Intel Core i5-10400F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")
                                    proce=101000
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteB560M.jpg")
                                    $(".textPlaca").html("Placa Madre: Gigabyte B560M")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")
                                    placa=89990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/KingstonKCP432NS68.jpg")
                                    $(".textRam").html("RAM: Kingston 16Gb (2 x 8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")
                                    ram=22741*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")

                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/MSIGeForceRTX3060VENTUS.png")
                                    $(".textGrafica").html("Gráfica: MSI GeForce RTX 3060 VENTUS")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/105998-msi-geforce-rtx-3060-ventus-2x-12g-oc")
                                    grafica=378980
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/105998-msi-geforce-rtx-3060-ventus-2x-12g-oc")

                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WesternDigitalBlue1TB.jpg")
                                    $(".textSSD").html("SSD: Western Digital Blue 1 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                                    ssd=55900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/EVGA600W2.png")
                                    $(".textFuente").html("Fuente de Poder: EVGA 600 W2")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                                    fuente=33000
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                        }else{ //intel gamer best

                            $(".card").show()
                                    
                            $(".imgProce").show()
                            $(".imgProce").attr("src","/Assets/img/IntelCorei7-13700K.jpg")
                            $(".textProce").html("Procesador: Intel Core i7-13700K")
                            $(".linkProce").attr("href", "https://www.solotodo.cl/products/152132-intel-core-i7-13700k-bx8071513700k")
                            proce=429900
                            $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                            $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/152132-intel-core-i7-13700k-bx8071513700k")

                            $(".imgPlaca").show()
                            $(".imgPlaca").attr("src","/Assets/img/ASUSROGSTRIXZ690-E.jpg")
                            $(".textPlaca").html("Placa Madre: ASUS ROG STRIX Z690-E")
                            $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/127535-asus-rog-strix-z690-e-gaming-wifi")
                            placa=419990
                            $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                            $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/127535-asus-rog-strix-z690-e-gaming-wifi")

                            $(".imgRam").show()
                            $(".imgRam").attr("src","/Assets/img/G.SkillTridentZ5RGB.jpg")
                            $(".textRam").html("RAM: G.Skill Trident Z5 RGB 32GB (2 x 16GB)")
                            $(".linkRam").attr("href", "https://www.solotodo.cl/products/131178-gskill-trident-z5-rgb-f5-6000j3636f16gx2-tz5rk-2-x-16gb-dimm-ddr5-6000")
                            ram=219990
                            $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                            $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/131178-gskill-trident-z5-rgb-f5-6000j3636f16gx2-tz5rk-2-x-16gb-dimm-ddr5-6000")

                            $(".imgGrafica").show()
                            $(".imgGrafica").attr("src","/Assets/img/GigabyteGeForceRTX4080.webp")
                            $(".textGrafica").html("Gráfica: Gigabyte GeForce RTX 4080 16GB")
                            $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")
                            grafica=1339990
                            $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                            $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")

                            
                            $(".imgGabinete").show()
                            $(".imgGabinete").attr("src","/Assets/img/ApexgamingBTS-730A.webp")
                            $(".textGabinete").html("Gabinete: Apexgaming BTS-730A")
                            $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")
                            gabinete=79990
                            $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                            $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")

                            
                            $(".imgSSD").show()
                            $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                            $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                            $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                            ssd=172960
                            $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                            $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                            $(".imgFuente").show()
                            $(".imgFuente").attr("src","/Assets/img/CorsairRMeSeriesRM1000e.jpg")
                            $(".textFuente").html("Fuente de Poder: Corsair RMe Series 1000W")
                            $(".linkFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
                            fuente=199990
                            $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                            $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
             
                            
                            total=proce+placa+ram+gabinete+ssd+fuente+grafica
                            $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                        }
                    }
                }else{ 
                    if(presupuesto=="eco"){ //intel edicion eco

                                    $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei5-10400F.jpg")
                                    $(".textProce").html("Procesador: Intel Core i5-10400F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")
                                    proce=101000
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/ASRockH470M.png")
                                    $(".textPlaca").html("Placa Madre: ASRock H470M-HVS")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")
                                    placa=69990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/KingstonKCP432NS68.jpg")
                                    $(".textRam").html("RAM: Kingston 16Gb (2 x 8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")
                                    ram=22741*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")

                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/MSIGeForceGTX1650.png")
                                    $(".textGrafica").html("Gráfica: MSI GeForce GTX 1650")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")
                                    grafica=186990
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")

                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WesternDigitalBlue1TB.jpg")
                                    $(".textSSD").html("SSD: Western Digital Blue 1 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                                    ssd=55900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/EVGA600W2.png")
                                    $(".textFuente").html("Fuente de Poder: EVGA 600 W2")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                                    fuente=33000
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                    }else{
                        if(presupuesto=="mid"){ //intel edicion mid


                                    $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei7-10700F.jpg")
                                    $(".textProce").html("Procesador: Intel Core i7-10700F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/84329-intel-core-i7-10700f-bx8070110700f")
                                    proce=269900
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/84329-intel-core-i7-10700f-bx8070110700f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteB560M.jpg")
                                    $(".textPlaca").html("Placa Madre: Gigabyte B560M")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")
                                    placa=89990
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 32Gb (2 x 16GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")
                                    ram=37676*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")

                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/GigabyteGeForceRTX3070GAMINGOC8G.jpg")
                                    $(".textGrafica").html("Gráfica: Gigabyte GeForce RTX 3070 GAMING OC 8G")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/92845-gigabyte-geforce-rtx-3070-gaming-oc-8g-gv-n3070gaming-oc-8gd")
                                    grafica=649000
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/92845-gigabyte-geforce-rtx-3070-gaming-oc-8g-gv-n3070gaming-oc-8gd")

                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                                    $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                                    ssd=172960
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/EVGA600W2.png")
                                    $(".textFuente").html("Fuente de Poder: EVGA 600 W2")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                                    fuente=33000
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                        }else{ //intel edicion best

                            $(".card").show()
                                    
                            $(".imgProce").show()
                            $(".imgProce").attr("src","/Assets/img/IntelCorei9-13900KF.jpg")
                            $(".textProce").html("Procesador: Intel Core i9-13900KF")
                            $(".linkProce").attr("href", "https://www.solotodo.cl/products/152129-intel-core-i9-13900kf-bx8071513900kf")
                            proce=619990
                            $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                            $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/152129-intel-core-i9-13900kf-bx8071513900kf")

                            $(".imgPlaca").show()
                            $(".imgPlaca").attr("src","/Assets/img/ASUSROGSTRIXZ690-E.jpg")
                            $(".textPlaca").html("Placa Madre: ASUS ROG STRIX Z690-E")
                            $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/127535-asus-rog-strix-z690-e-gaming-wifi")
                            placa=419990
                            $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                            $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/127535-asus-rog-strix-z690-e-gaming-wifi")

                            $(".imgRam").show()
                            $(".imgRam").attr("src","/Assets/img/G.SkillTridentZ5RGB.jpg")
                            $(".textRam").html("RAM: G.Skill Trident Z5 RGB 32GB (2 x 16GB)")
                            $(".linkRam").attr("href", "https://www.solotodo.cl/products/131178-gskill-trident-z5-rgb-f5-6000j3636f16gx2-tz5rk-2-x-16gb-dimm-ddr5-6000")
                            ram=219990
                            $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                            $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/131178-gskill-trident-z5-rgb-f5-6000j3636f16gx2-tz5rk-2-x-16gb-dimm-ddr5-6000")

                            $(".imgGrafica").show()
                            $(".imgGrafica").attr("src","/Assets/img/GigabyteGeForceRTX4080.webp")
                            $(".textGrafica").html("Gráfica: Gigabyte GeForce RTX 4080 16GB")
                            $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")
                            grafica=1339990
                            $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                            $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")

                            
                            $(".imgGabinete").show()
                            $(".imgGabinete").attr("src","/Assets/img/ApexgamingBTS-730A.webp")
                            $(".textGabinete").html("Gabinete: Apexgaming BTS-730A")
                            $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")
                            gabinete=79990
                            $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                            $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")

                            
                            $(".imgSSD").show()
                            $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                            $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                            $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                            ssd=172960
                            $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                            $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                            $(".imgFuente").show()
                            $(".imgFuente").attr("src","/Assets/img/CorsairRMeSeriesRM1000e.jpg")
                            $(".textFuente").html("Fuente de Poder: Corsair RMe Series 1000W")
                            $(".linkFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
                            fuente=199990
                            $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                            $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
             
                            
                            total=proce+placa+ram+gabinete+ssd+fuente+grafica
                            $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                        }
                    }
                }
            }
        }else{ //amd
            if(tipo=="of"){
                if(presupuesto=="eco"){ //amd of eco

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/AMDA6-9500E.jpg")
                                    $(".textProce").html("Procesador: AMD A6-9500E")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/117293-amd-a6-9500e-ad9500ahabbox")
                                    proce=36990
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/117293-amd-a6-9500e-ad9500ahabbox")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/MSIA320M-APRO.jpg")
                                    $(".textPlaca").html("Placa Madre: MSI A320M-A PRO")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")
                                    placa=45000
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("Placa Madre: Crucial CT8G4DFRA32A 8GB")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")
                                    ram=18987
                                    $(".linkRam").html("Precio $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")

                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/XTechDeimos.jpg")
                                    $(".textGabinete").html("Gabinete: XTech Deimos (ATX)")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    gabinete=18590
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WDGreen240Gb.webp")
                                    $(".textSSD").html("SSD: Western Digital Green 240 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                                    ssd=14900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")

                                    total=proce+placa+ram+gabinete+ssd+fuente
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                }else{
                    if(presupuesto=="mid"){ //amd of mid

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/AMDRyzen33200G.jpg")
                                    $(".textProce").html("Procesador: AMD Ryzen 3 3200G")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/63489-amd-ryzen-3-3200g-yd3200c5fhbox")
                                    proce=98500
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/63489-amd-ryzen-3-3200g-yd3200c5fhbox")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/MSIA320M-APRO.jpg")
                                    $(".textPlaca").html("Placa Madre: MSI A320M-A PRO")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")
                                    placa=45000
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 16Gb (2x8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")
                                    ram=57800
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86173-crucial-ct8g4dfra32a-1-x-8gb-dimm-ddr4-3200")


                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/DeepCoolMatrexx.jpg")
                                    $(".textGabinete").html("Gabinete: DeepCool Matrexx 30")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/62689-deepcool-matrexx-30-dp-matx-matrexx30")
                                    gabinete=24990
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/62689-deepcool-matrexx-30-dp-matx-matrexx30")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/ssdWD480Gb.jpg")
                                    $(".textSSD").html("SSD: Western Digital Green 480 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/136354-western-digital-green-480-gb-wds480g3g0a")
                                    ssd=26490
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/136354-western-digital-green-480-gb-wds480g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                    }else{ //amd of best

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/AMDRyzen54600G.jpeg")
                                    $(".textProce").html("Procesador: AMD Ryzen 5 4600G")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/154930-amd-ryzen-5-4600g-100-100000147box")
                                    proce=102833
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/154930-amd-ryzen-5-4600g-100-100000147box")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteGA-A320M-S2H.png")
                                    $(".textPlaca").html("Placa Madre: Gigabyte GA-A320M-S2H")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/45390-gigabyte-ga-a320m-s2h")
                                    placa=62900
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/45390-gigabyte-ga-a320m-s2h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 32Gb (2 x 16GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")
                                    ram=37676*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")

                                    
                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                                    $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                                    ssd=172960
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                    }
                }
            }else{
                if(tipo=="gamer"){
                    if(presupuesto=="eco"){ //amd gamer eco

                        $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/AMDRyzen33200G.jpg")
                                    $(".textProce").html("Procesador: AMD Ryzen 3 3200G")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/63489-amd-ryzen-3-3200g-yd3200c5fhbox")
                                    proce=98500
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/63489-amd-ryzen-3-3200g-yd3200c5fhbox")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/MSIA320M-APRO.jpg")
                                    $(".textPlaca").html("Placa Madre: MSI A320M-A PRO")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")
                                    placa=45000
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")


                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 8Gb (2 x 4GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")
                                    ram=14450*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")

                                    
                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/MSIGeForceGTX1650.png")
                                    $(".textGrafica").html("Gráfica: MSI GeForce GTX 1650")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")
                                    grafica=186990
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")


                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/XTechDeimos.jpg")
                                    $(".textGabinete").html("Gabinete: XTech Deimos (ATX)")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    gabinete=18590
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    
                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WDGreen240Gb.webp")
                                    $(".textSSD").html("SSD: Western Digital Green 240 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                                    ssd=14900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    fuente=22900
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                    }else{
                        if(presupuesto=="mid"){ //amd gamer mid
                            
                            $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/AMDRyzen55600G.png")
                                    $(".textProce").html("Procesador: AMD Ryzen 5 5600G")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/117431-amd-ryzen-5-5600g-100-100000252box")
                                    proce=139900
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/117431-amd-ryzen-5-5600g-100-100000252box")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteGA-A320M-S2H.png")
                                    $(".textPlaca").html("Placa Madre: Gigabyte GA-A320M-S2H")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/45390-gigabyte-ga-a320m-s2h")
                                    placa=62900
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/45390-gigabyte-ga-a320m-s2h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/KingstonKCP432NS68.jpg")
                                    $(".textRam").html("RAM: Kingston 16Gb (2 x 8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")
                                    ram=22741*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")

                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/MSIGeForceRTX3060VENTUS.png")
                                    $(".textGrafica").html("Gráfica: MSI GeForce RTX 3060 VENTUS")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/105998-msi-geforce-rtx-3060-ventus-2x-12g-oc")
                                    grafica=378980
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/105998-msi-geforce-rtx-3060-ventus-2x-12g-oc")

                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WesternDigitalBlue1TB.jpg")
                                    $(".textSSD").html("SSD: Western Digital Blue 1 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                                    ssd=55900
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/EVGA600W2.png")
                                    $(".textFuente").html("Fuente de Poder: EVGA 600 W2")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                                    fuente=33000
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                        }else{ //amd gamer best
                            
                            $(".card").show()
                                    
                            $(".imgProce").show()
                            $(".imgProce").attr("src","/Assets/img/AMDRyzen77700X.jpg")
                            $(".textProce").html("Procesador: AMD Ryzen 7 7700X")
                            $(".linkProce").attr("href", "https://www.solotodo.cl/products/151870-amd-ryzen-7-7700x-100-100000591wof")
                            proce=359990
                            $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                            $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/151870-amd-ryzen-7-7700x-100-100000591wof")

                            $(".imgPlaca").show()
                            $(".imgPlaca").attr("src","/Assets/img/ASUSROGSTRIXB650E-F.jpg")
                            $(".textPlaca").html("Placa Madre: ASUS ROG STRIX B650E-F")
                            $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/158633-asus-rog-strix-b650e-f-gaming-wifi")
                            placa=351490
                            $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                            $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/158633-asus-rog-strix-b650e-f-gaming-wifi")

                            $(".imgRam").show()
                            $(".imgRam").attr("src","/Assets/img/CorsairVengeanceRGB32GB.jpg")
                            $(".textRam").html("RAM: Corsair Vengeance RGB 32GB (2 x 16GB)")
                            $(".linkRam").attr("href", "https://www.solotodo.cl/products/152002-corsair-vengeance-rgb-cmh32gx5m2b5600z36-2-x-16gb-dimm-ddr5-5600")
                            ram=229000
                            $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                            $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/152002-corsair-vengeance-rgb-cmh32gx5m2b5600z36-2-x-16gb-dimm-ddr5-5600")

                            $(".imgGrafica").show()
                            $(".imgGrafica").attr("src","/Assets/img/GigabyteGeForceRTX4080.webp")
                            $(".textGrafica").html("Gráfica: Gigabyte GeForce RTX 4080 16GB")
                            $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")
                            grafica=1339990
                            $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                            $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")

                            
                            $(".imgGabinete").show()
                            $(".imgGabinete").attr("src","/Assets/img/ApexgamingBTS-730A.webp")
                            $(".textGabinete").html("Gabinete: Apexgaming BTS-730A")
                            $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")
                            gabinete=79990
                            $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                            $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")

                            
                            $(".imgSSD").show()
                            $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                            $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                            $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                            ssd=172960
                            $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                            $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                            $(".imgFuente").show()
                            $(".imgFuente").attr("src","/Assets/img/CorsairRMeSeriesRM1000e.jpg")
                            $(".textFuente").html("Fuente de Poder: Corsair RMe Series 1000W")
                            $(".linkFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
                            fuente=199990
                            $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                            $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
             
                            
                            total=proce+placa+ram+gabinete+ssd+fuente+grafica
                            $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                        }
                    }
                }else{ //edicion
                    if(presupuesto=="eco"){ //amd edicion eco

                        $(".card").show()
                                    
                        $(".imgProce").show()
                        $(".imgProce").attr("src","/Assets/img/AMDRyzen54600G.jpeg")
                        $(".textProce").html("Procesador: AMD Ryzen 5 4600G")
                        $(".linkProce").attr("href", "https://www.solotodo.cl/products/154930-amd-ryzen-5-4600g-100-100000147box")
                        proce=102833
                        $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                        $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/154930-amd-ryzen-5-4600g-100-100000147box")

                        $(".imgPlaca").show()
                        $(".imgPlaca").attr("src","/Assets/img/MSIA320M-APRO.jpg")
                        $(".textPlaca").html("Placa Madre: MSI A320M-A PRO")
                        $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")
                        placa=45000
                        $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                        $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/108940-msi-a320m-a-pro")

                        $(".imgRam").show()
                        $(".imgRam").attr("src","/Assets/img/KingstonKCP432NS68.jpg")
                        $(".textRam").html("RAM: Kingston 16Gb (2 x 8GB)")
                        $(".linkRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")
                        ram=22741*2
                        $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                        $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")

                        $(".imgGrafica").show()
                        $(".imgGrafica").attr("src","/Assets/img/MSIGeForceGTX1650.png")
                        $(".textGrafica").html("Gráfica: MSI GeForce GTX 1650")
                        $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")
                        grafica=186990
                        $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                        $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/83911-msi-geforce-gtx-1650-d6-ventus-xs-oc")

                        
                        $(".imgGabinete").show()
                        $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                        $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                        $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                        gabinete=47424
                        $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                        $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                        
                        $(".imgSSD").show()
                        $(".imgSSD").attr("src","/Assets/img/WesternDigitalBlue1TB.jpg")
                        $(".textSSD").html("SSD: Western Digital Blue 1 TB")
                        $(".linkSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
                        ssd=55900
                        $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                        $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/145832-western-digital-blue-sa510-1-tb-wds100t3b0a")
         

                        $(".imgFuente").show()
                        $(".imgFuente").attr("src","/Assets/img/EVGA600W2.png")
                        $(".textFuente").html("Fuente de Poder: EVGA 600 W2")
                        $(".linkFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                        fuente=33000
                        $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                        $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
         
                        
                        total=proce+placa+ram+gabinete+ssd+fuente+grafica
                        $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                    }else{
                        if(presupuesto=="mid"){ //amd edicion mid
                            
                            $(".card").show()
                                    
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/AMDRyzen75700G.png")
                                    $(".textProce").html("Procesador: AMD Ryzen 7 5700G")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/117428-amd-ryzen-7-5700g-100-100000263box")
                                    proce=198190
                                    $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/117428-amd-ryzen-7-5700g-100-100000263box")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteGA-A320M-S2H.png")
                                    $(".textPlaca").html("Placa Madre: Gigabyte GA-A320M-S2H")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/45390-gigabyte-ga-a320m-s2h")
                                    placa=62900
                                    $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/45390-gigabyte-ga-a320m-s2h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 32Gb (2 x 16GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")
                                    ram=37676*2
                                    $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/86500-crucial-ct16g4dfra32a-1-x-16gb-dimm-ddr4-3200")

                                    $(".imgGrafica").show()
                                    $(".imgGrafica").attr("src","/Assets/img/GigabyteGeForceRTX3070GAMINGOC8G.jpg")
                                    $(".textGrafica").html("Gráfica: Gigabyte GeForce RTX 3070 GAMING OC 8G")
                                    $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/92845-gigabyte-geforce-rtx-3070-gaming-oc-8g-gv-n3070gaming-oc-8gd")
                                    grafica=649000
                                    $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                                    $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/92845-gigabyte-geforce-rtx-3070-gaming-oc-8g-gv-n3070gaming-oc-8gd")

                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    gabinete=47424
                                    $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                                    $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                                    ssd=172960
                                    $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/EVGA600W2.png")
                                    $(".textFuente").html("Fuente de Poder: EVGA 600 W2")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                                    fuente=33000
                                    $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/102791-evga-600-w2-100-w2-0600-k5-600-w")
                     
                                    
                                    total=proce+placa+ram+gabinete+ssd+fuente+grafica
                                    $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))

                        }else{ //amd edicion best
                            
                            $(".card").show()
                                    
                            $(".imgProce").show()
                            $(".imgProce").attr("src","/Assets/img/AMDRyzen97950X.jpg")
                            $(".textProce").html("Procesador: AMD Ryzen 9 7950X")
                            $(".linkProce").attr("href", "https://www.solotodo.cl/products/151872-amd-ryzen-9-7950x-100-100000514wof")
                            proce=619990
                            $(".linkProce").html("Precio $"+proce.toLocaleString("es-ES"))
                            $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/151872-amd-ryzen-9-7950x-100-100000514wof")

                            $(".imgPlaca").show()
                            $(".imgPlaca").attr("src","/Assets/img/ASUSROGSTRIXB650E-F.jpg")
                            $(".textPlaca").html("Placa Madre: ASUS ROG STRIX B650E-F")
                            $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/158633-asus-rog-strix-b650e-f-gaming-wifi")
                            placa=351490
                            $(".linkPlaca").html("Precio $"+placa.toLocaleString("es-ES"))
                            $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/158633-asus-rog-strix-b650e-f-gaming-wifi")

                            $(".imgRam").show()
                            $(".imgRam").attr("src","/Assets/img/CorsairVengeanceRGB32GB.jpg")
                            $(".textRam").html("RAM: Corsair Vengeance RGB 32GB (2 x 16GB)")
                            $(".linkRam").attr("href", "https://www.solotodo.cl/products/152002-corsair-vengeance-rgb-cmh32gx5m2b5600z36-2-x-16gb-dimm-ddr5-5600")
                            ram=229000
                            $(".linkRam").html("Precio Total $"+ram.toLocaleString("es-ES"))
                            $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/152002-corsair-vengeance-rgb-cmh32gx5m2b5600z36-2-x-16gb-dimm-ddr5-5600")

                            $(".imgGrafica").show()
                            $(".imgGrafica").attr("src","/Assets/img/GigabyteGeForceRTX4080.webp")
                            $(".textGrafica").html("Gráfica: Gigabyte GeForce RTX 4080 16GB")
                            $(".linkGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")
                            grafica=1339990
                            $(".linkGrafica").html("Precio $"+grafica.toLocaleString("es-ES"))
                            $(".linkImgGrafica").attr("href", "https://www.solotodo.cl/products/155626-gigabyte-geforce-rtx-4080-16gb-eagle-oc-gv-n4080eagle-oc-16gd")

                            
                            $(".imgGabinete").show()
                            $(".imgGabinete").attr("src","/Assets/img/ApexgamingBTS-730A.webp")
                            $(".textGabinete").html("Gabinete: Apexgaming BTS-730A")
                            $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")
                            gabinete=79990
                            $(".linkGabinete").html("Precio $"+gabinete.toLocaleString("es-ES"))
                            $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/145940-apexgaming-bts-730a")

                            
                            $(".imgSSD").show()
                            $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                            $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                            $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                            ssd=172960
                            $(".linkSSD").html("Precio $"+ssd.toLocaleString("es-ES"))
                            $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                            $(".imgFuente").show()
                            $(".imgFuente").attr("src","/Assets/img/CorsairRMeSeriesRM1000e.jpg")
                            $(".textFuente").html("Fuente de Poder: Corsair RMe Series 1000W")
                            $(".linkFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
                            fuente=199990
                            $(".linkFuente").html("Precio $"+fuente.toLocaleString("es-ES"))
                            $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/179848-corsair-rme-series-rm1000e-cp-9020250-ww-1000-w")
             
                            
                            total=proce+placa+ram+gabinete+ssd+fuente+grafica
                            $(".total").html("Precio Total: $"+total.toLocaleString("es-ES"))


                        }
                    }
                }
            }
        }
                                             
        /*
        switch(placa){
            case "intel":{
                switch(tipo){
                    case "of":{
                        switch(presupuesto){
                            case "eco":{
                                    //intel ofimatica economico
                                    alert("intel ofimatica economico")

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/celeronG5905.jpg")
                                    $(".textProce").html("Procesador: Intel Celeron G5905")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/87887-intel-celeron-g5905-bx80701g5905")
                                    $(".linkProce").html("Precio $41.900")
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/87887-intel-celeron-g5905-bx80701g5905")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/ASRockH470M.png")
                                    $(".textPlaca").html("Placa Madre: ASRock H470M-HVS")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")
                                    $(".linkPlaca").html("Precio $69.990")
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/113700-asrock-h470m-hvs")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 8Gb (2 x 4GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")
                                    $(".linkRam").html("Precio Total $29.840")
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")


                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/XTechDeimos.jpg")
                                    $(".textGabinete").html("Gabinete: XTech Deimos")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")
                                    $(".linkGabinete").html("Precio $18.590")
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/125555-xtech-deimos-xt-gmr3")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/WDGreen240Gb.webp")
                                    $(".textSSD").html("SSD: Western Digital Green 240 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                                    $(".linkSSD").html("Precio $15.413")
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/140975-western-digital-green-240-gb-wds240g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    $(".linkFuente").html("Precio $22.900")
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    $(".total").html("Precio Total: $205.833")

                                    break;
                            }
                            case "mid":{

                                    //intel ofimatica medio
                                    

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei3-10100F.png")
                                    $(".textProce").html("Procesador: Intel Core i3-10100F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")
                                    $(".linkProce").html("Precio $73.174")
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteB560M.jpg")
                                    $(".textPlaca").html("Placa Madre: Gigabyte B560M")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")
                                    $(".linkPlaca").html("Precio $81.900")
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/crucial4GB.png")
                                    $(".textRam").html("RAM: Crucial 16Gb (4 x 4GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")
                                    $(".linkRam").html("Precio Total $59.680")
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")


                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/DeepCoolMatrexx.jpg")
                                    $(".textGabinete").html("Gabinete: DeepCool Matrexx 30")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/62689-deepcool-matrexx-30-dp-matx-matrexx30")
                                    $(".linkGabinete").html("Precio $25.790")
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/62689-deepcool-matrexx-30-dp-matx-matrexx30")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/ssdWD480Gb.jpg")
                                    $(".textSSD").html("SSD: Western Digital Green 480 GB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/136354-western-digital-green-480-gb-wds480g3g0a")
                                    $(".linkSSD").html("Precio $28.617")
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/136354-western-digital-green-480-gb-wds480g3g0a")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    $(".linkFuente").html("Precio $22.900")
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    $(".total").html("Precio Total: $292.061")
                                    break;
                            }
                            case "best":{
                                
                                    //intel ofimatica best
                                    

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei5-10400F.jpg")
                                    $(".textProce").html("Procesador: Intel Core i5-10400F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")
                                    $(".linkProce").html("Precio $105.011")
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/81377-intel-core-i5-10400f-bx8070110400f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteB560M.jpg")
                                    $(".textPlaca").html("Placa Madre: Gigabyte B560M")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")
                                    $(".linkPlaca").html("Precio $81.900")
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/KingstonKCP432NS68.jpg")
                                    $(".textRam").html("RAM: Kingston 32Gb (4 x 8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")
                                    $(".linkRam").html("Precio Total $93.636")
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")

                                    
                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    $(".linkGabinete").html("Precio $60.160")
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                                    $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                                    $(".linkSSD").html("Precio $179.034")
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    $(".linkFuente").html("Precio $22.900")
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    $(".total").html("Precio Total: $542.641")
                                    break;

                            }         
                        }
                    }
                    case "gamer":{
                        switch(presupuesto){
                            case "eco":{
                                
                                    //intel gamer eco
                                    alert("intel gamer eco")

                                    $(".card").show()
                                    $("#grafica").hide()
                                    $(".imgProce").show()
                                    $(".imgProce").attr("src","/Assets/img/IntelCorei3-10100F.png")
                                    $(".textProce").html("Procesador: Intel Core i3-10100F")
                                    $(".linkProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")
                                    $(".linkProce").html("Precio $69.690")
                                    $(".linkImgProce").attr("href", "https://www.solotodo.cl/products/91723-intel-core-i3-10100f-bx8070110100f")

                                    $(".imgPlaca").show()
                                    $(".imgPlaca").attr("src","/Assets/img/GigabyteB560M.jpg")
                                    $(".textPlaca").html("Placa Madre: Gigabyte B560M")
                                    $(".linkPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")
                                    $(".linkPlaca").html("Precio $81.900")
                                    $(".linkImgPlaca").attr("href", "https://www.solotodo.cl/products/110046-gigabyte-b560m-ds3h")

                                    $(".imgRam").show()
                                    $(".imgRam").attr("src","/Assets/img/KingstonKCP432NS68.jpg")
                                    $(".textRam").html("RAM: Kingston 32Gb (4 x 8GB)")
                                    $(".linkRam").attr("href", "https://www.solotodo.cl/products/108934-kingston-kcp432ns68-1-x-8gb-dimm-ddr4-3200")
                                    $(".linkRam").html("Precio Total $93.636")
                                    $(".linkImgRam").attr("href", "https://www.solotodo.cl/products/34619-crucial-ct4g4dfs824a-1-x-4gb-dimm-ddr4-2400")

                                    
                                    
                                    $(".imgGabinete").show()
                                    $(".imgGabinete").attr("src","/Assets/img/ThermaltakeV200TemperedGlass.jpg")
                                    $(".textGabinete").html("Gabinete: Thermaltake V200 Tempered Glass")
                                    $(".linkGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")
                                    $(".linkGabinete").html("Precio $60.160")
                                    $(".linkImgGabinete").attr("href", "https://www.solotodo.cl/products/49902-thermaltake-v200-tempered-glass-ca-1k8-00m1wn-00")

                                    
                                    $(".imgSSD").show()
                                    $(".imgSSD").attr("src","/Assets/img/CrucialMX5002TB.png")
                                    $(".textSSD").html("Disco Solido: Crucial MX500 2 TB")
                                    $(".linkSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                                    $(".linkSSD").html("Precio $179.034")
                                    $(".linkImgSSD").attr("href", "https://www.solotodo.cl/products/42562-crucial-mx500-2-tb-ct2000mx500ssd1")
                     

                                    $(".imgFuente").show()
                                    $(".imgFuente").attr("src","/Assets/img/fuenteColerMasterElite400.jpg")
                                    $(".textFuente").html("Fuente de Poder: Cooler Master Elite V3 400")
                                    $(".linkFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                                    $(".linkFuente").html("Precio $22.900")
                                    $(".linkImgFuente").attr("href", "https://www.solotodo.cl/products/45215-cooler-master-elite-v3-400-mpw-4001-acaan1-wo-400-w")
                     
                                    $(".total").html("Precio Total: $542.641")
                                    break;

                            }
                            case "mid":{
                                
                            }
                            case "best":{
                                
                            }         
                        }
                    }
                    case "edicion":{
                        switch(presupuesto){
                            case "eco":{
                                
                            }
                            case "mid":{
                                
                            }
                            case "best":{
                                
                            }         
                        }
                    }        
                }
            }
            case "amd":{
                switch(tipo){
                    case "of":{
                        switch(presupuesto){
                            case "eco":{
                                
                            }
                            case "mid":{
                                
                            }
                            case "best":{
                                
                            }         
                        }
                    }
                    case "gamer":{
                        switch(presupuesto){
                            case "eco":{
                                
                            }
                            case "mid":{
                                
                            }
                            case "best":{
                                
                            }         
                        }
                    }
                    case "edicion":{
                        switch(presupuesto){
                            case "eco":{
                                
                            }
                            case "mid":{
                                
                            }
                            case "best":{
                                
                            }         
                        }
                    }        
                }
            }    
        }
        */


    miBoton.reset() 
    })
    
})





