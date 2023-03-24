function PromedioyMasAlto(event)
{
    event.preventDefault()
    
    let mat = parseInt(document.getElementById("Nota_Matematica").value); 
    ValidarNumerosIndividuales ("Nota_Matematica", mat)

    let len = parseInt(document.getElementById("Nota_Lengua").value);
    ValidarNumerosIndividuales ("Nota_Lengua", len)

    let efsi = parseInt(document.getElementById("Nota_EFSI").value);
    ValidarNumerosIndividuales ("Nota_EFSI", efsi)
    
    let promedio = parseFloat((mat+len+efsi)/3);
    
    if (promedio >= 6){document.getElementById('p1').style.color = "lime";}
    else{document.getElementById('p1').style.color = "red";}
    
    if(ValidarResultado(mat,len,efsi) && EsNulo(promedio)){document.getElementById("p1").innerHTML = promedio; document.getElementById("p2").innerHTML = alto;}
    else{document.getElementById("p2").innerHTML = "Error!"; document.getElementById("p1").innerHTML = "Error!"; document.getElementById("p2").style.color = "red"; document.getElementById("p1").style.color = "red";}
}
function MasAlto(event)
{
  event.preventDefault()
    
  let mat = parseInt(document.getElementById("Nota_Matematica").value); 
  ValidarNumerosIndividuales ("Nota_Matematica", mat)

  let len = parseInt(document.getElementById("Nota_Lengua").value);
  ValidarNumerosIndividuales ("Nota_Lengua", len)

  let efsi = parseInt(document.getElementById("Nota_EFSI").value);
  ValidarNumerosIndividuales ("Nota_EFSI", efsi)

  let alto = parseFloat(Math.max(mat,len,efsi));

  if(mat==alto && alto <=10 && alto >= 0){document.getElementById('matte').style.color = "blue";}
  if(len==alto && alto <=10 && alto >= 0){document.getElementById('leng').style.color = "blue";}
  if(efsi==alto && alto <=10 && alto >= 0){document.getElementById('efsii').style.color = "blue";}
  document.getElementById("p2").innerHTML = alto;
}
function ValidarNumerosIndividuales (ID, double)
{
  if (double > 10 || double < 0){document.getElementById(ID).style.color = "red"; document.getElementById(ID).style.borderColor = "red";}
  else if (EsNulo(double)){document.getElementById(ID).style.color = "lime"; document.getElementById(ID).style.borderColor = "lime";} 
} 
function EsNulo(promedio) 
{
  if (isNaN(promedio)){return false;}
  return true;
}
function ValidarResultado (mat, len, efsi)
{
  if(mat > 10 || len > 10 || efsi > 10 || mat < 0 || len < 0 || efsi < 0 ){return false;}
  return true;
}
