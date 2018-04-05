$.ajax({
        url: 'http://localhost:3000/tasks',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (key, value) {
                if (value.completed === true) {
                    $('.content').append('<div>' + value.title + '<br><br>' + value.description + '</div>' + '<br><br>');
                }
            })

        }
});


