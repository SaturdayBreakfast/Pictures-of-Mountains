$(".everest").click(function() {
    changeBackground("https://user-images.githubusercontent.com/14214/42292528-246b57fe-7fa1-11e8-83fb-3a0daa76d08e.png");
});

$(".k2").click(function() {
    changeBackground("https://user-images.githubusercontent.com/14214/42292614-ba367638-7fa1-11e8-8e94-97bc8b566232.png");
});

$(".kangchenjunga").click(function() {
    changeBackground("https://user-images.githubusercontent.com/14214/42292634-e0fedbac-7fa1-11e8-9d56-6d12dcd7ab3c.png");
});

function changeBackground (background) {
    $(".mountain-picture").attr("src", background);
}

changeBackground("https://user-images.githubusercontent.com/14214/42292528-246b57fe-7fa1-11e8-83fb-3a0daa76d08e.png");