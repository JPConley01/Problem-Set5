//1. alphabetSoup
function alphabetSoup(str) {

  str = str.split("");

  str = str.sort();

  str = str.join("");

  return str;
}

function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

// 2. vowelCount

function vowelCount(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      count += 1;
    }
  }
  return count;
}



// 3. coinDeterminer

function coinDeterminer(num){
	var coinArr = [1,5,7,9,11];
	var count = 1;
	var newNum = num;
	var coinsUsed = [];
	var coinCount = 0;
	for (i = coinArr.length; i > -1; i--){
		coinCount = coinsUsed.length;
		if (newNum != 0) {
			var coin = coinArr[i-1];
			//console.log("coinCount: " + coinCount);
			if (newNum - coin > -1 && coinsUsed.indexOf(coin) == -1){
				coinsUsed.push(coin);
				console.log("coinsUsed: "+ coinsUsed);
			}
			if (newNum - coin < 0) {
				count--;
				newNum += coin;
				i--;
				console.log(coin + " didn't work");

			}

			if (newNum > -1){
				newNum -= coin;
				count++;
				i++;
				console.log("coin: " + coin);
				console.log("newNum: " + newNum);

				//console.log("count: " + count);

			} else if (newNum == 0) {
				return coinCount;
			}
			console.log("coin: " + coin);
			console.log("newNum: " + newNum);

			//console.log("count: " + count);
		} else {
			return coinCount;
		}
	}
	return coinCount;
}

//CoinDeterminer(60);
//CoinDeterminer(16);
//CoinDeterminer(25);
//CoinDeterminer(12);
//CoinDeterminer(5);
//CoinDeterminer(4);
//CoinDeterminer(34);
//CoinDeterminer(37);
coinDeterminer(100);
