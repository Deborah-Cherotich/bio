fun main (){
var x = multiplication(3.142,22)
    println(x)

// printfullName()
// add(24, 27)
//    add(75,865)
//    add(-673, 89)
//    var x = add(40,20)
//    print

var y = getstringlength("Deborah")

    getstringlength("Hello")
    getstringlength("Deborah")
    getstringlength("Cherotich")


    division(7.0,4)
    division(5.8,3)
    division(4.0,3)

}
fun printfullName(){

    var firstName = "Deborah"
    var lastName = "Cherotich"
    var fullName = firstName + "" + lastName
    println(fullName)
}
//fun add (num1: Int, num2:Int){
//    var results = num1 + num2
//    return = results
//
//
//
//
//    var num3 = 2000
//    var num4 = 30500
//    var result2 = num3 + num4
//    println(result)
//}
// fun add( num3:Int, num4:Int):Int{
//   var results = num3 + num4
//     return results
//
// }
//fun getsringlenth(){

//    var word =  "Air Freshner"
//    println(word.length)
//
//}


fun printfullName(firstName:String,lastName:String){

    var fullName = firstName + ""+ lastName
    println(fullName)
}
fun getstringlength(word:String):Int{
    return word.length



}
fun getStringLength(word:String){
    println(word.length)
}
fun division(num1:Double,num2:Int):Double{
    var result = num1 / num2
    return result
}
fun multiplication(num1:Double,num2:Int):Double{
    var area = num1 * num2
    return area

}