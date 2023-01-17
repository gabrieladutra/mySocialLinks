
<p> CSS - Folha de estilo em cascata
 
Exemplo de uma declaração

> seletor {propiedade: valor;} 
</p>
<p>

>A cascata considera a última declaração
 
> Especificidade: cada seletor tem um peso
id -> class -> elemento  <br />
 
>Tudo são caixas no CSS */ 

</p>

````css
body{
  background-color: aquamarine;
}


body{
   display: block;
}

/*Visualização em bloco
 
Display: inline
Visualização em linha
 As divs, hs e header são  display block, e o span é display inline
 mas tudo pode ser alterado
 */
 
header{
  border: 1px solid red;
  padding: 60px;
}
 
h1{
  border: 1px solid green;
  height: 60px;
}
 
p{
  margin: 20px;
  border: 1px solid blue;
}
span{
  border: 1px solid brown;
}


body {
    /*
    background-image: url(./assets/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover; 
    background: color image repeat position/size;
    background: coim() repos
    */
    background: url(./assets/bg-mobile.jpg) no-repeat top center/cover;
}

/*Reset de CSS e a medida da caixa*/

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

/*
O  display block ocupa toda a largura disponível, o display none oculta o elento da tela  
 
 A img é inline 

 Regra do CSS: Em elemto inline não consigo aplicar margin:auto

 Para resolver isso altera o display para block ou o elento pai para text-align:center 
 

 display:inline-block é possivel usar alguns elementos em block e inline
*/
````