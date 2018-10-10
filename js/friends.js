var friends = [
    {name: "Monty", favcolor: "blue", favnumber: 42},
    {name: "Joel", favcolor: "green", favnumber: 7576},
    {name: "Andrew", favcolor: "orange", favnumber: 27},
    {name: "Nick S", favcolor: "purple", favnumber: 13},
    {name: "Steven", favcolor: "orange", favnumber: 10},
    {name: "Lance", favcolor: "blue", favnumber: 21},
    {name: "Angie", favcolor: "pink", favnumber: 7},
    {name: "Mike", favcolor: "green", favnumber: 23},
    {name: "Nick S1", favcolor: "blue", favnumber:6},
    {name: "Emilie", favcolor: "olive", favnumber: 13},
    {name: "Robert", favcolor: "purple", favnumber: 31},
    {name: "Phillip", favcolor: "green", favnumber: 13},
    {name: "Sheila", favcolor: "purple", favnumber: 17},
    {name: "Rachael", favcolor: "black", favnumber: 66},
];

$().ready(function(){

    var tbody=$("#tb");

    for(var friend of friends) {
//one row in a table being run again and again. Being appended as a child tag.
        var row = "<tr>";
        row += "<td>" + friend.name + "</td>";
        row += "<td>" + friend.favcolor + "</td>";
        row += "<td>" + friend.favnumber + "</td>";
        row += "</tr>";

        tbody.append(row);

    }
})