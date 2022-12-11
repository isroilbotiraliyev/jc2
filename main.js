var son1 = prompt('birinchi sonni kiriting !')
    son2 = prompt('ikkinchi  sonni kiriting !')
    son3 = prompt('uchinchi sonni kiriting !')
if (!isNaN(son1 && son2 && son3)) {

    if (son1 < son2 && son3 < son1 || son1 > son2 && son3 > son1  ) {
        console.log("sonlarning o'rtachasi " + son1 )
    } else if (son2 < son1 && son3 < son2 || son2 > son1 && son3 > son2) {
        console.log("sonlarning o'rtachasi " + son2 )
    }  else {
        console.log("sonlarning o'rtachasi " + son3 )
    }

} else {

    console.log(' raqam kiriting !!!')
}
