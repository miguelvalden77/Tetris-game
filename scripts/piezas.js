// Clase para las piezas del juego
class Piezas{

    constructor(){

        this.x = 0
        this.y = 0
        this.w = 40
        this.h = 40
        this.aumentoDist = 0
        this.dist = 50
        this.angulo = 1
        this.tipoPieza = 4
        this.colores = ["red", "purple", "green", "yellow", "blue", "brown"]
        this.bloques = [

            [ // Pieza vertical
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [ // Pieza Cuadrado
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [ // Pieza L
                [
                    [0, 0, 3, 0],
                    [0, 0, 3, 0],
                    [0, 0, 3, 3],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 3],
                    [0, 3, 3, 3],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 3, 3, 0],
                    [0, 0, 3, 0],
                    [0, 0, 3, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [3, 3, 3, 0],
                    [3, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [ // Pieza T
                [
                    [0, 4, 4, 4],
                    [0, 0, 4, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 4],
                    [0, 0, 4, 4],
                    [0, 0, 0, 4],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 0, 4, 0],
                    [0, 4, 4, 4],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 4, 0, 0],
                    [0, 4, 4, 0],
                    [0, 4, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [ // Pieza Z
                [
                  [0, 0, 0, 0],
                  [0, 0, 5, 5],
                  [0, 5, 5, 0],
                  [0, 0, 0, 0]
                ],
            
                [
                  [0, 0, 5, 0],
                  [0, 0, 5, 5],
                  [0, 0, 0, 5],
                  [0, 0, 0, 0]
                ],
            
                [
                  [0, 0, 0, 0],
                  [0, 0, 5, 5],
                  [0, 5, 5, 0],
                  [0, 0, 0, 0]
                ],
            
                [
                  [0, 0, 5, 0],
                  [0, 0, 5, 5],
                  [0, 0, 0, 5],
                  [0, 0, 0, 0]
                ]
              ],
              [ // Pieza Z invertida
                [
                  [0, 0, 0, 0],
                  [0, 6, 6, 0],
                  [0, 0, 6, 6],
                  [0, 0, 0, 0]
                ],
            
                [
                  [0, 0, 0, 6],
                  [0, 0, 6, 6],
                  [0, 0, 6, 0],
                  [0, 0, 0, 0]
                ],
            
                [
                  [0, 0, 0, 0],
                  [0, 6, 6, 0],
                  [0, 0, 6, 6],
                  [0, 0, 0, 0]
                ],
            
                [
                    [0, 0, 0, 6],
                    [0, 0, 6, 6],
                    [0, 0, 6, 0],
                    [0, 0, 0, 0]
                ]
              ]
              
        ]


    }

    dibujarPiezas = () =>{
        for(let fila = 0; fila < 4; fila++){
            for(let col = 0; col < 4; col++){
                if(this.bloques[this.tipoPieza][this.angulo][fila][col] !== 0){
                    contexto.fillStyle = this.colores[this.tipoPieza]
                    const x0 = (this.x + col - 1) * this.w
                    const y0 = (this.y + fila) * this.h
                    contexto.fillRect(x0, y0, this.w, this.h)
                }
            }
        }
    }

    rotar = ()=>{
        if(this.angulo < 3){
            this.angulo ++
        }else{
            this.angulo = 0
        }
    }

    limpiarCanvas = ()=>{
        contexto.fillStyle = "lightgray"
        contexto.fillRect(0, 0, canvas.width, canvas.height)
    }

    moveDrch = ()=>{
          this.x ++
      }
  
      moveIzq = ()=>{
          this.x --
      }

    estaAbajo = ()=>{
    if(this.aumentoDist < this.dist){
        this.aumentoDist ++
        } else{
            this.y ++
          this.aumentoDist = 0
        }
      }

}

