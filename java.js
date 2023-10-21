alert ("you are conneted")
//var boss = Math.floor(math.random( ) * 9)

//var bomb = Math.floor(Math.random() * 9)


// const box = (number) => {
// if ( number===0)(
// document.getElementById(0).innerHTML = "&#x1f332")
// if ( number===1)(
// document.getElementById(1).innerHTML = "&#x1f331")
// if ( number===2)(
// document.getElementById(2).innerHTML = "&#x1f333")
// if ( number===3)(
// document.getElementById(3).innerHTML = "&#x1f334")
// if ( number===4)(
// document.getElementById(4).innerHTML = "&#x1f335")
// if ( number===5)(
// document.getElementById(5).innerHTML = "&#x1f336")
// if ( number===6)(
// document.getElementById(6).innerHTML = "&#x1f337")
// if ( number===7)(
// document.getElementById(7).innerHTML = "&#x1f339")
// if ( number===8)(
//  document.getElementById(8).innerHTML = "&#x1f338")
// if ( number===9)(
//  document.getElementById(9).innerHTML = "&#x1f330")
// }
var treasurelocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)

const changeToEmoji = (number) => {
  if(number === treasurelocation){
    document.getElementById(treasurelocation).innerHTML = '🎁'
  } else if(number === bombLocation){
    document.getElementById(bombLocation).innerHTML = '💣'
  } else {
    document.getElementById(number).innerHTML = '🐟'
  }
}