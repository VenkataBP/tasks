// 1. extract first five letters from a string (' gfuh ieiuei ')

let a = (' gfuh ieiuei ')
console.log(a.trim())
console.log(a.slice(0,5))

// 2. get the length of a string and make it uppercase ('hduej dij')
let str = ('hduej dij')
console.log(str.toUpperCase())

// 3. take a string, make it lowercase and trim it (' biji jdo ')
let str1 = (' biji jDo ')
console.log(str1.toLowerCase())

// 4. replace specified word in a string ('', '')
let str3 = "venkata divya"
console.log(str3.replace("divya",","))

// 5. random statements in implicit coercion e.g. (89 + 'hello' + 90 / 9)

let str4 = (89 + 'hello' + 90 / 9)
console.log(str4)
