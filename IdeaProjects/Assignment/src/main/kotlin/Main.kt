fun main() {

     name("Deborah")
    var x = modulas(40.5, 5)
    println(x)
var y = add(400,30,40,50)
    println(y)

     factAboutMyself("I love playing football ")
}

fun name(name: String) {
    val name = ("Hello ${name}")
    println(name)
}

fun modulas(num1: Double, num2: Int): Double {

    var modulas = num1 % num2
    return modulas
}

fun add(num1: Int,num2: Int,num3: Int,num4: Int):Int{
    var add = num1 + num2 + num3 + num4
    return add


}
fun factAboutMyself(word:String){
    println(word)
}