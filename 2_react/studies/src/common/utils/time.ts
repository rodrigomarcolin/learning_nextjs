export function tempoParaSegundos (tempo : string) {
  let numeros = tempo.split(':')
  if (numeros.length === 3)
    return parseInt(numeros[0])*3600 + parseInt(numeros[1])*60 + parseInt(numeros[2])
  else
    return parseInt(numeros[0])*60 + parseInt(numeros[1])
}

export function segundosParaTempo(segundos: number) {
  let horas : number = Math.floor(segundos / 3600)
  segundos -= horas*3600
  let minutos : number = Math.floor(segundos / 60)
  segundos -= minutos * 60

  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
}