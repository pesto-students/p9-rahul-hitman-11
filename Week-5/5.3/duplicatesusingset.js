function hasDuplicate(arr)
{
    const set = new Set();
    for(const i of arr)
    {
        if(set.has(i))
        {
            return true;
        }
        else{
            set.add(i);
        }
    }
    return false;
}
console.log(hasDuplicate([1,2,1,2,3,4,5])); // true;
console.log(hasDuplicate([1,2,3]));  // false