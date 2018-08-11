(function () {

    function scrollTop () {
        window.scrollTo(0, 0);
    }

    function toggleAreUReady () {
        var uploadFile = $('#buttonUpload')[0].files[0];
        var imageLink = window.URL.createObjectURL(uploadFile);
        $('#imageFixed').css("background-image", "url('" + imageLink + "')");
        $('#browseImage').attr("src", imageLink);
        $("#lightbox").toggleClass("active");
    }

    function togglePageRead () {
        $("#pagePrepare").toggleClass("hidden");
        $("#pageRead").toggleClass("active");
    }

    function handleNextClick () {
        toggleAreUReady();
        $("#pageRead").toggleClass("hidden-image");
        togglePageRead();
        scrollTop();
    }

    function initPage () {
        togglePageRead();
        $("#pageRead").toggleClass("hidden-image");
        scrollTop();
    }

    $(document).ready(function(){
        initPage();
        $("#lightbox").on("click", handleNextClick);
        $("#redo").on("click", togglePageRead);
        $("#buttonUpload").on("change", toggleAreUReady);
    });
}())