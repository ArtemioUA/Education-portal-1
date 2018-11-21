$("#get").click(function () {

    var tab = $("input[name='tab']:checked").val();
    var id = $("input[name='id']").val();

    var url = "http://localhost:3000/" + tab + "/" + id;

    var obj = $("#response");
    obj.empty();

    if (tab == 'places') {
        $.ajax({
            url: url,
            success: function (json) {
                obj.append('<p>Name    : ' + json.name + '</p>');
                obj.append('<p>Address : ' + json.address + '</p>');
                obj.append('<p>lat:' + json.lat + ', lng: ' + json.lng + '</p>');
                obj.append('<br><br>');

                obj.append('<h2>' + json.title + "</h2>");
                obj.append('<p>' + json.content + '</p>');
            },
            error: function (xhr, status, error) {
                obj.html("<p id='err'>Ooops, something went wrong!</p>");
            }
        });

    } else {
        $.ajax({
            url: url,
            success: function (json) {
                obj.append('<p>Name        : ' + json.name + '</p>');
                obj.append('<p>Surname     : ' + json.surname + '</p>');
                obj.append('<p>Description : ' + json.description + '</p>');
            },
            error: function (xhr, status, error) {
                obj.html("<p id='err'>Ooops, something went wrong!</p>");
            }
        });
    }

});