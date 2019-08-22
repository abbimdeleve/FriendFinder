const friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        console.log("post route")
        let leastDifference = 50
        let bestMatch = {}
        for(let i=0; i<friendsData.length; i++){
            const possFriendArr = friendsData[i].scores
            let difference = 0
            for(let j=0; j<possFriendArr.length; j++){
                difference+= Math.abs(parseInt(possFriendArr[j]) - parseInt(req.body.scores[j]))
            }
            console.log(difference)
            if (difference<leastDifference){
                leastDifference = difference;
                bestMatch = friendsData[i]
            }
            console.log(bestMatch)
        }
        friendsData.push(req.body);
        res.json(bestMatch);
    })
}