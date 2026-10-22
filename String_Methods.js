//find first and last index of a
let str="JavaScript a fantastic language";
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));

//extract character at specific index and combine them 
let str="AAKANKSHA";
console.log(str.charAt(0).concat(str.charAt(6),str.charAt(4)));

//count how many time a occur usng indexof and loop

let str="banana and apple";
let count=0;
let index=str.indexOf("a");

while(index!==-1){
    count++;
    index=str.indexOf("a",index+1);
}
console.log(count);


//check string start with Java and ends with Script
let str="JavaScript";
console.log(str.startsWith("Java"));
console.log(str.endsWith("Script"));

//print charater at even index
let str="INTERVIEW";
let result="";
for(let i=0;i<str.length;i+=2){
  //console.log(str.charAt(i));
  result += str.charAt(i);

}
console.log(result);

//print charcode of first middle and last index
let str="Coding";
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(str.length/2));
console.log(str.charCodeAt(str.length-1));

//find java and python in sentence print their indexex or not found
let str="I am learning JavaScript for interviews";
let a=str.indexOf("Java");
let b=str.indexOf("Python");
console.log(a===-1 ?"Not found":a);
console.log(b===-1 ?"Not found":b);

//remove spaces from both ends
let str="         javascript interview      ";
console.log(str.trim());

//extract last five character
let str="Programming";
console.log(str.slice(6));

//convert charcode into string
let result=String.fromCharCode(74,97,118,97);
console.log(result);

//print every index where java occurs ******check***
let str="Java is easy.Java is powerful.Java is popular.";
let index=str.indexOf("java");
while(index!==-1){
    console.log(index);
    index=str.indexOf("Java",index+1);
}

//generate username from a full name remove spaces and join words using underscore
let name="     Aaki Rama Patil";
let result=name.trim().split(" ").join("_");
console.log(result);

//show only last digit and replace remaning character as *
let phone="9021279827";
let result=phone.slice(6).padStart(phone.length,"*");
console.log(result);

//check file name ends with .pdf
let filename="resume.pdf";
if(filename.endsWith(".pdf")){
    console.log("PDF file");
}
else{
console.log("Other file");
}

//extract script and reverse its character using loop
let str="JavaScript";
let part=str.slice(4);
let result="";
for(let i=part.length;i>=0;i--){
result+=part.charAt(i);
}
console.log(result);

//find middle char
let str="INTERVIEW";
console.log(str.charAt(str.length/2));

//remove spaces
let str="            Learn JavaScript        ";
console.log(str.trimEnd());


//check both words sql and java are present or not 
let str="I learned Java and SQL";
if(str.includes("Java")&& str.includes("SQL")){
console.log("both found");
}
else{
    console.log("not both found");
}

//add * until the string reaches to 15 characcter
let str="JavaScript";
console.log(str.padEnd(15,"*"));

//extract first three words and join them with hypen
let str="JavaScript is very useful for interviews";
let word=str.split(" ");
let result=word.slice(0,3).join("-");
console.log(result);


//trim a full name join its words with underscore pad the username to 25 char and check whether
//the trimmed name stats with "A"
let name="       Aakanksha Patil      ";
let trimmed=name.trim();
let username=trimmed.split(" ").join("_");
let label=username.padEnd(25,"*");

console.log("Username:"+username);
console.log("Label:"+label);
console.log("Starts with A:"+trimmed.startsWith("A"));


//find longest word in senetence if multiple word share the max length return first one;
let str="JavaScript makes programming interesting";
let words=str.split(" ");
let longest=words[0];

for(let i=1;i<words.length;i++){
    if(words[i].length>longest.length){
        longest=words[i];
    }
}
console.log(longest);


//replace digit with charcode
let str="a1b2c3";
let result="";
for(let i=0;i<str.length;i++){
let ch=str.charAt(i);
if(ch>="0" && ch<="9"){
    result=result.concat(str.charCodeAt(i));
}
else{
    result=result.concat(ch);
}
}
console.log(result);


//check string is palindrome or not
let str="    mam ";
str=str.trim();
let reverse="";
for(let i=str.length-1;i>=0;i--){
    reverse+=str.charAt(i);
}
if(str===reverse){
    console.log("Palindrome")
}
else{
    console.log("not palindrome");
}



//find the first non-repeated character
let str="aabbcdeeff";
let result="";
for(let i=0;i<str.length;i++){
let ch=str.charAt(i);
if(str.indexOf(ch)===str.lastIndexOf(ch)){
    result=ch;
    break;
}
}
console.log(result);


//reverse the order of words
let str="Java makes coding interesting"
let words=str.split(" ");
let result=[];
for(let i=words.length-1;i>=0;i--){
    result.push(words[i]);
}
console.log(result.join(" "));

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