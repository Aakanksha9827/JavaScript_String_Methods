//print how many time g occur 
let str="Programming";
for(let i=0;i<str.length;i++){

    let ch=str.charAt(i);
    if(ch==="g"){
        console.log(ch);
    }
}

//print all char except vowel
let str="javascript";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(!"aeiou".includes(ch)){
        console.log(ch);
    }
}

//count occurance of char
let str="banana";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch==="a"){
        count++;
    }
}
  console.log(count);

//extract uppercase char
let str="JaVaScRiPt";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch===ch.toUpperCase()){
        console.log(ch);
    }
}

//first non repeated char
let str="aabbcdeeff";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)===str.lastIndexOf(ch)){
        console.log(ch);
        break;
    }
}

//count uppercase character
let str="JaVaSCiIPt";
let count=0;
for(let i=0;i<str.length;i++){
let ch=str.charAt(i);
if(ch===ch.toUpperCase()){
    count++;
}
}
console.log(count);

//count vowel
let str="JavaScript Programming";
let count=0
for(let i=0;i<str.length;i++){
let ch=str.charAt(i);
if("aeiou".includes(ch)){
    count++;
}
}
console.log(count);

//count consonant
let str="JavaScript";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();
    if("aeiou".includes(ch)===false){
        count++;
    }
}
console.log(count);

//count how many time each vowel appear
let str="programming";
let a=0,e=0,i=0,o=0,u=0;

for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();
    if(ch==="a"){
        a++;
    }
    else if(ch==="e"){
        e++;
    }
    else if(ch==="i"){
        i++;
    }
    else if(ch==="o"){
        o++;
    }
    else if(ch==="u"){
        u++;
    }
}
console.log("a:"+a);
console.log("e:"+e);
console.log("i:"+i);
console.log("o:"+o);
console.log("u:"+u);


//count a letter;
let str="educAtion";
let a=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
   if(ch==="a"||ch=="A"){
    a++;
   } 
}
console.log(a);

//count vowel and consonant
let str="JavaScript";
let vowel=0;
let consonant=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();
if("aeiou".includes(ch)){
    vowel++;
}
else{
    consonant++;
}
}
console.log("Vowels are:"+vowel);
console.log("consonants are:"+consonant);

//remove spaces
let str="Java Script Programming";
let result="";

for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch!==" "){
        result+=ch
    }
}
console.log(result);

//count no of words in string
let str="Java Script Programming";
let words=str.split(" ");
console.log(words.length);

//reverse each word
let str="Java Script";
let words=str.split(" ");
let result="";
for(let i=0;i<words.length;i++){
let word=words[i];

for(j=word.length-1;j>=0;j--){
    result+=word.charAt(j);
}
if(i<words.length-1){
result+=" ";
}
}
console.log(result);

//find longest word
let str="JavaScript is very interesting";
let word=str.split(" ");
let max=word[0];
for(let i=1;i<word.length;i++){
if(word[i].length>max.length){
    max=word[i];
}
}
console.log(max);


//find shortest word
let str="JavaScript is very interesting";
let word=str.split(" ");
let min=word[0];
for(let i=1;i<word.length;i++){
    if(word[i].length<min.length){
        min=word[i];
    }
}
console.log(min);


//frequency of  a char
let str="banana";
let a=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();
    if(ch=="a"){
        a++;
    }
}
console.log(a);


//count frequency of every char

let str="banana";
let b=0;
let a=0;
let n=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();
    if(ch=="b"){
        b++;
    }
    else if(ch=="a"){
        a++;
    }
    else if(ch=="n"){
        n++;
    }
}
console.log("b:"+b);
console.log("a:"+a);
console.log("n:"+n);

//char that occur only once
let str="Programming";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)===str.lastIndexOf(ch)){
        console.log(ch);
    }
}


//remove duplicate char keep only first occurance
let str="Programming";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(!result.includes(ch)){
        result+=ch;
    }
}
console.log(result);

//find first repeated char
let str="Programming";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();
   if(str.indexOf(ch)!=str.lastIndexOf(ch)){
    result+=ch;
    break;
   }
}
console.log(result);

//first non repeated char
let str="aabbcdeeff";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)==str.lastIndexOf(ch)){
        result+=ch;
        break;
    }
}
console.log(result);

//count distince  character reapted //r m g
let str="programming";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)!==str.lastIndexOf(ch) && str.indexOf(ch)===i){
        count++;
    }
}
console.log(count);


//remove duplicate character
let str="aabbccdde";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(!result.includes(ch)){
        result+=ch;
    }
}
console.log(result);

//find the first repeated word character
let str="javascript";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)!=str.lastIndexOf(ch)){
        console.log(ch);
        break;
    }
}
//find second repetaed char
let str="abacbd";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)!=str.lastIndexOf(ch) && str.indexOf(ch)===i){
        count++;
    if(count===2){
        console.log(ch);
        break;
    }
}
}


//find third repeated char
let str="abacbdce";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)!==str.lastIndexOf(ch) && str.indexOf(ch)===i){
        count++;
        if(count===3){
            console.log(ch);
            break;
        }
    }
}

//count unique repeated char
let str="aabbcdeeff";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(str.indexOf(ch)!=str.lastIndexOf(ch) && str.indexOf(ch)===i){
       result+=ch;
    }
}
console.log(result);

//remove all occurance of a 
let str="banana";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch!=="a"){
        result+=ch
    }
}
console.log(result);

//replace spaces with hypens
let str="Java Script Programming";
let word=str.split(" ").join("_");
console.log(word);


//count digit in string
let str="Java123Script45";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch>="0" && ch<="9"){
        count++;
    }
}
console.log(count);

//count special char
let str="Java@123#Script!";
let count=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(!ch>="a"&& ch<="z" && ch>=0 && ch<=9 && ch>="A" && ch<="z"){
        count++;
    }
}
console.log(count);