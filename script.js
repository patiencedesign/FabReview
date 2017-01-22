
// $("#itemSubmit").click(function(){
//     var newItem = $("#itemNameInput").val();
//     var newItemLink = $("#itemLinkInput").val();
    
//     console.log(newItem)
// })

// Posts Data to Featured Section

for (i = 0; i < sampleReviews.length; i++){
    $("#featured").append(
        "<div class='panel panel-default itemBox'><div class='panelbody'>" +
            sampleReviews[i].itemName + "<br>" +
            sampleReviews[i].requestedBy + "<br>" +
        "</div></div>"
        
        )
} 

// Posts Data to Latest Section

for (i = 0; i < sampleReviews.length; i++){
    $("#latest").append(
        "<div class='panel panel-default itemBox'><div class='panelbody'>" +
            sampleReviews[i].itemName + "<br>" +
            sampleReviews[i].requestedBy + "<br>" +
        "</div></div>"
        
        )
}

// Admin Login 

// var username = $("#userName").val()
// var password = $("#passWord").val()


// if (username == "fabreview" && password == "fabreview"){
//     $("#loginSubmit").click(function(){
//         $("#reviewSections").hide()
//     })

// }