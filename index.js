// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

function sumProduct(n, ...args){
    if (n <= 2){
        return 'please povide n>2 numbers';
    }
    const sum = args[0] + args[1];
    let product = 1;
    for (let i = 2; i < args.length; i++) {
        product *= args[i];
    }
    return [sum, product];
}

const arr = sumProduct(6, 3, 5, 8, 45, 23);
console.log(arr);



// ● დავუშვათ გვინდა ობიექტიდან
// წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user
// ობიექტს და დააბრუნებს city-ს. გამოიყენე
// destructuring. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined

function getAddress(user) {
    const { banks } = user || {};
    const [{ address: { city } = {} } = {}] = banks || [];
    return city;
  }



// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const clonedObj = Array.isArray(obj) ? [] : {};
                                                                
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
  
    return clonedObj;
  }

  //chatgpt დავიხმარე ეს ბოლო გამიჭირდა
