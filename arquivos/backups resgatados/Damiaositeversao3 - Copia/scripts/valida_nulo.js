function trim(objeto,trinca)
{
var semIni=true;
var semFim=true;
var retorno = objeto.value;
if (objeto.value.length > 0 )
  {
  while ((semIni) || (semFim))
    {
    if (retorno.charAt(0)==' ')
      {
      retorno= retorno.substring(1,retorno.length);
      }
    else
      {
      semIni=false;
      }
    if (retorno.charAt(retorno.length-1)== ' ')
      {
      retorno= retorno.substring(0,retorno.length-1);
      }
    else
      {
      semFim=false;
      }	
    }
  }
if (trinca)
{
  objeto.value=retorno;
}  
return(retorno);
}
function valida_nulo(objeto,msg)
{
	if (trim(objeto, false)=='')
		{
		objeto.select();
		alert(msg);
		return(false);           			
		}
	return(true);
}