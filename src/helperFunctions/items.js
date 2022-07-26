const PriorityQueue = require('./priorityQueue');
const newData = require('../newData.json');



//Pushing in our Array of Item Cost
const itemCost = [];
Object.values(newData).forEach((item) => {
    itemCost.push(item.itemCost);
});




class Item {
    constructor(itemName, amountBought, auctionHouseCost, itemNum, totalGold = 0, shardSpent = 0) {

        this.itemName = itemName;
        this.itemNum = itemNum;
        //this.start will be where we're starting within our array,
        this.start = amountBought;
        //itemCost is our 2D Array, and we need to access it from where the user entered amountBought
        this.shardCost = itemCost[this.itemNum][this.start];
        this.auctionHouseCost = auctionHouseCost;
        this.value = this.auctionHouseCost / this.shardCost;
        this.shardSpent = shardSpent;
        this.amountBought = 0;
        this.totalGold = totalGold;

    }

    updateShardCost() {
        this.shardSpent += this.shardCost;

        //Update the amount of this item bought.
        this.amountBought++;
        this.start++;
        this.totalGold += this.auctionHouseCost;

        //Making sure our start index isn't out of bounds.
        if (this.start !== itemCost[this.itemNum].length) {
            this.shardCost = itemCost[this.itemNum][this.start];
            this.value = this.auctionHouseCost / this.shardCost;
        }
    }
}

export let goldM;
export let shardsL;
export let resultArr;

export function whatToBuy(numShards, valueThreshold, arrOfItems) {

    let currShards = numShards;
    let goldMade = 0;

    const itemsArr = [];

    //data.items will have to change to be come from our front end
    // const itemsList = data.items.filter(item => {
    //     return item;
    // });

    // This one is with for static data servered from JSON
    // const itemsList = Object.values(newData).filter(item => {
    //     return item;
    // });


    //Data provided from our front-end
    let itemsList;
    if (arrOfItems !== undefined) {
        itemsList = arrOfItems.filter(item => {
            return item;
        });
    }



    //Pushing in our class into our itemsArr
    if (arrOfItems === undefined) {
        return;
    } else {
        arrOfItems.forEach(item => {
            itemsArr.push(new Item(item.label, item.amountBought, item.auctionHouseCost, item.itemNum));
        });

    }

    // itemsList.forEach(item => {
    //     itemsArr.push(new Item(item.label, item.amountBought, item.auctionHouseCost, item.itemNum));
    // });

    // console.log(itemsList);
    //items[1] is the Amount bought and we want the user to be able to update this
    // itemName, amountBought, auctionHouseCost, itemNum

    const pq = new PriorityQueue();

    itemsArr.forEach(item => {
        pq.push(item);
    });


    while (currShards > 0 && !pq.isEmpty() && pq.peek() && pq.peek().value >= valueThreshold) {
        if (currShards - pq.peek().shardCost < 0) {
            pq.pop();
            continue;
        }
        let tempItem = pq.pop();
        // console.log(`the top of out stack is ${tempItem.itemName}, with a value of ${tempItem.value}`);
        currShards -= tempItem.shardCost;
        goldMade += tempItem.auctionHouseCost;
        tempItem.updateShardCost();
        // console.log(`${tempItem.itemName}, THE value AFTER UPDATESHARDCOST ${tempItem.value}`);
        if (tempItem.start !== itemCost[tempItem.itemNum].length) {
            pq.push(tempItem);
        } else {
            console.log(tempItem, 'THIS IS TEMP ITEM');
            console.log(`${tempItem.itemName}  HAS`, tempItem.amountBought);
        }

    }

    // console.log(`GOLD MADE:${goldMade} // SHARDS LEFT: ${currShards}`, valueThreshold, pq._heap, itemsArr);

    goldM = goldMade;
    shardsL = currShards;
    resultArr = itemsArr;

    return (`GOLD MADE:${goldMade} // SHARDS LEFT: ${currShards}`, valueThreshold, pq._heap, itemsArr);



}



