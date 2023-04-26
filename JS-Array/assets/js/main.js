//Array-a dərsdə keçdiyimizə uyğun remove funksiyası yazın. Bu method Arrayın sonuncu elementini silsin.

var arr = [2, 6, 9, 14, 16, 23];
function MyArray() {

    this.remove = function () {
        arr.length=arr.length-1;
        return arr;
    }
}
var arr1 = new MyArray();
console.log(arr);
console.log(arr1.remove());
console.log(arr1.remove());
console.log(arr1.remove());
console.log(arr1.remove());

//console.log-ları özüm çox vermişəm aydın görünsün deyə və açanda consolda restart verəndə düşür.




