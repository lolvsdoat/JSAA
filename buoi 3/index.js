function getItems() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var items = document.getElementById("productList").getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].textContent.toLowerCase();
        if (itemText.includes(input)) {
            console.log(items[i].textContent);
        }
    }
}