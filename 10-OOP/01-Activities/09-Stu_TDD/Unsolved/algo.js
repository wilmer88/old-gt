function Algo() {}

Algo.prototype.reverse = function(str) 
{
    return str.split("").reverse().join("")
};

Algo.prototype.isPalindrome = function(str) 
{
    return str == str.split("").reverse().join("")
};

Algo.prototype.capitalize = function(str) 
{
   const splited = str.split(" ");
   for (let i = 0; i < splited.length; i++) 
   {
    splited[i] = splited[i][0].toUpperCase() + splited[i].substr(1);
    }
     return splited.join(" ")
};

module.exports = Algo;
