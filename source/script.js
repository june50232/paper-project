(function () {

    function scrollTop () {
        window.scrollTo(0, 0);
    }

    function toggleAreUReady () {
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
        $("#buttonUpload").on("click", toggleAreUReady);
        $("#lightbox").on("click", handleNextClick);
        $("#redo").on("click", togglePageRead);
    });
}())