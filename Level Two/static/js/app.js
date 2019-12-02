// from data.js
var tableData = data;
var tbody = d3.select("tbody")

//from level one 
tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        var cell = row.append("td").text(value);
    });
});

// button for date and time 
var button = d3.select("#datetime-btn");

button.on("click", function(){
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    var tbody = d3.select("tbody")
    tbody.html("");

    //loop with filtered 
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});

//button for city
var button = d3.select("#city-btn");

button.on("click", function(){
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.city === inputDate);
    var tbody = d3.select("tbody")
    tbody.html("");

    // loop with filtered
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});

//button for state
var button = d3.select("#state-btn");

button.on("click", function(){
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.city === inputDate);
    var tbody = d3.select("tbody")
    tbody.html("");

    // loop with filtered
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});

//button for country 
var button = d3.select("#country-btn");

button.on("click", function(){
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.city === inputDate);
    var tbody = d3.select("tbody")
    tbody.html("");

    // loop with filtered
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});

//button for shape
var button = d3.select("#shape-btn");

button.on("click", function(){
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.city === inputDate);
    var tbody = d3.select("tbody")
    tbody.html("");

    // loop with filtered
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});