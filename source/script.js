(function () {

    function scrollTop () {
        window.scrollTo(0, 0);
    }

    function toggleAreUReady () {
        var uploadFile = $('#buttonUpload')[0].files[0];
        var imageLink = window.URL.createObjectURL(uploadFile);
        $('#imageFixed').css("background-image", "url('" + imageLink + "')");
        $("#lightbox").toggleClass("active");
    }

    function togglePageRead () {
        $("#pagePrepare").toggleClass("hidden");
        $("#pageRead").toggleClass("active");
        scrollTop();
    }

    function handleNextClick () {
        toggleAreUReady();
        togglePageRead();
    }

    $(document).ready(function(){
        $("#lightbox").on("click", handleNextClick);
        $("#redo").on("click", togglePageRead);
        $("#buttonUpload").on("change", toggleAreUReady);
    });
}())