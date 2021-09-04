var words= [{word:"哈",num:"9"},{word:"哼",num:"4"},{word:"他",num:"3"},
{word:"没",num:"1"},{word:"美",num:"5"},{word:"每",num:"6"},
]

var r = 1
rungame()

function rungame(){
setTimeout(function(){changeword1(words[3*r-3].word,words[3*r-3].num)},1000)
// setTimeout(resetword1,7000);
setTimeout(function(){resetword1(words[3*r-3].num)},4000)


setTimeout(function(){changeword1(words[3*r-2].word,words[3*r-2].num)},5000)
setTimeout(function(){resetword1(words[3*r-2].num)},7000)


setTimeout(function(){changeword1(words[3*r-1].word,words[3*r-1].num)},9000)
setTimeout(function(){resetword1(words[3*r-1].num)},11000)

}

function nextRound(){
r=r+1
rungame()
}


function changeword1(word1,number) {
document.getElementById(number).innerText = word1
}

function resetword1(number) {
document.getElementById(number).innerText = "?"
}