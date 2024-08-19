let balance = 0;
let level = 1;
let perClickCoins = 1;
let dailyLimit = 1000;
let earnedToday = 0;
let botBought = false;
let burtonBought = false;
let burtonClaimTime = 0;

document.getElementById('coin').addEventListener('click', function() {
    if (earnedToday < dailyLimit) {
        balance += perClickCoins;
        earnedToday += perClickCoins;
        document.getElementById('balance').textContent = balance;
    } else {
        alert("Daily limit reached!");
    }
});

// Task button to open modal
document.getElementById('tasks').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = "block";
});

// Boost button to open modal
document.getElementById('boost').addEventListener('click', function() {
    document.getElementById('boost-modal').style.display = "block";
});

// Withdrawal button
document.getElementById('withdrawal').addEventListener('click', function() {
    alert("Coin listed on October 25, 2024");
});

// Close modals
let modals = document.getElementsByClassName('close');
for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

// Claim reward for joining channel
document.getElementById('claim-reward').addEventListener('click', function() {
    balance += 1000;
    document.getElementById('balance').textContent = balance;
    document.getElementById('task-modal').style.display = "none";
    alert("1000 coins added for joining the channel!");
});

// Upgrade level
document.getElementById('upgrade').addEventListener('click', function() {
    let upgradeCost = level * 500;
    if (balance >= upgradeCost) {
        balance -= upgradeCost;
        level++;
        perClickCoins++;
        document.getElementById('balance').textContent = balance;
        document.getElementById('level').textContent = level;
        document.getElementById('upgrade-cost').textContent = level * 500;
        alert("Level upgraded!");
    } else {
        alert("Not enough coins to upgrade!");
    }
});

// Upgrade daily limit
document.getElementById('upgrade-limit').addEventListener('click', function() {
    let limitUpgradeCost = dailyLimit * 1.5;
    if (balance >= limitUpgradeCost) {
        balance -= limitUpgradeCost;
        dailyLimit += 1000;
        document.getElementById('balance').textContent = balance;
        document.getElementById('limit').textContent = dailyLimit;
        document.getElementById('limit-cost').textContent = dailyLimit * 1.5;
        alert("Daily limit upgraded!");
    } else {
        alert("Not enough coins to upgrade the daily limit!");
    }
});

// Buy Burton bot
document.getElementById('buy-burton').addEventListener('click', function() {
    if (balance >= 5000) {
        balance -= 5000;
        burtonBought = true;
        document.getElementById('balance').textContent = balance;
        document.getElementById('claim-burton-section').style.display = "block";
        alert("Burton Bot purchased! You can claim coins every 5 hours.");
    } else {
        alert("Not enough coins to buy Burton!");
    }
});

// Claim daily coins from Burton bot
document.getElementById('claim-burton').addEventListener('click', function() {
    let currentTime = new Date().getTime();
    if (burtonBought) {
        if (currentTime - burtonClaimTime >= 5 * 60 * 60 * 1000) { // 5 hours in milliseconds
            balance += 1500;
            document.getElementById('balance').textContent = balance;
            burtonClaimTime = currentTime;
            alert("1500 coins added to your account!");
        } else {
            let remainingTime = Math.ceil((5 * 60 * 60 * 1000 - (currentTime - burtonClaimTime)) / (60 * 1000)); // Remaining time in minutes
            alert("You can claim your coins again in " + remainingTime + " minutes.");
        }
    } else {
        alert("You need to buy the Burton Bot first!");
    }
});
