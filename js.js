$(document).ready(function () {
    $.ajax({
        url: "fetch.php",
        method: "POST",
        dataType: "json",
        success: function (data) {
            $('#treeview').treeview({data: data});
        }
    });
});