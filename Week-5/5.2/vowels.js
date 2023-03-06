function vowelsCount(str) {
    const str1 = str.toLowerCase();
    const vowels = ['a' ,'e' , 'i', 'o' , 'u'];
    const map  = new Map();
    let count=0;
    for(const i of str1)
    {
        if(vowels.includes(i))
        {
            count++;
            if(map.has(count))
            {
                map.set(count,map.get(count)+1);
            }
            else{
                map.set(count,1);
            }
        }
    }
    return map;
    
}
console.log(vowelsCount('HELLO'));  // Map(2) { 1 => 1, 2 => 1 }
console.log(vowelsCount('aeiou'));  // Map(5) { 1 => 1, 2 => 1, 3 => 1, 4 => 1, 5 => 1 }
