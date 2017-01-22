var requestData = [
    user1 = {
        name: "Patience",
        itemLink: "SampleLink",
        date: 170119,
        votes: 25
    },
    user2 = {
        name: "Annie",
        itemLink: "SampleLink",
        date: 170119,
        votes: 30
    },
    user3 = {
        name: "Wendy",
        itemLink: "SampleLink",
        date: 170119,
        votes: 35
    },
    user4 = {
        name: "Kim",
        itemLink: "SampleLink",
        date: 170119,
        votes: 40
    },
    user5 = {
        name: "Irene",
        itemLink: "SampleLink",
        date: 170119,
        votes: 45
    },
    user6 = {
        name: "Joy",
        itemLink: "SampleLink",
        date: 170119,
        votes: 50
    },
    user7 = {
        name: "Mark",
        itemLink: "SampleLink",
        date: 170119,
        votes: 55
    },
    user8 = {
        name: "Johnny",
        itemLink: "SampleLink",
        date: 170119,
        votes: 60
    },
    user9 = {
        name: "Jeffrey",
        itemLink: "SampleLink",
        date: 170119,
        votes: 65
    },
    user10 = {
        name: "Kasper",
        itemLink: "SampleLink",
        date: 170119,
        votes: 70
    },
    user11 = {
        name: "Sunny",
        itemLink: "SampleLink",
        date: 170119,
        votes: 75
    }
]


for (i = 0; i < requestData.length; i++){
    $("#requestBoxes").append(
        
        "<div class='col-md-3'><div class='panel panel-default'><div class='panel-body'>" +
            requestData[i].name + "<br>" +
            requestData[i].itemLink + "<br>" +
            "Votes: " + requestData[i].votes + "<br>" +
            requestData[i].date + "<br>" +
            "<button class='btn btn-info btn-sm'>Review</button>" +
            "<button class='btn btn-primary btn-sm'>Upvote</button>"
            
        +"</div></div></div>"
            
        )
}
    
    