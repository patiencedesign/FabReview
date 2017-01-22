// Posts Data to Featured Section

for (i = 0; i < sampleReviews.length; i++){
    $("#featured").append(
        "<div class='panel panel-default'><div class='panelbody'>" +
            sampleReviews[i].itemName + "<br>" +
            sampleReviews[i].requestedBy + "<br>" +
        "</div></div>"
        
        )
} 

// Posts Data to Latest Section

for (i = 0; i < sampleReviews.length; i++){
    $("#latest").append(
        "<div class='panel panel-default'><div class='panelbody'>" +
            sampleReviews[i].itemName + "<br>" +
            sampleReviews[i].requestedBy + "<br>" +
        "</div></div>"
        
        )
}

