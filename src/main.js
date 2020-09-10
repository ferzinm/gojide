

function closeModal() {
    [].forEach.call(document.querySelectorAll('.is-open'), function(el) {
        el.classList.remove('is-open');
    });
}

document.addEventListener('DOMContentLoaded', function() {

    // Add dynamic year to copyright
    var span = document.getElementById("year");
    span.innerText = "" + new Date().getFullYear();

    // Handle modal views
    var elements = document.getElementsByClassName("fancy-portrait");
    for (var i=0; i<elements.length; i++) {
        elements.item(i).addEventListener('click', function(e) {
            e.preventDefault();
            var source = e.target || e.srcElement;
            var id = source.parentNode.parentNode.getAttribute("href").substring(1);
            closeModal();
            document.getElementById(id).classList.add('is-open');
        });
    }
    [].forEach.call(document.querySelectorAll('.portrait-close'), function(el) {
        el.addEventListener('click', function() {
            closeModal();
        });
    });

    // Handle sticky header
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    // MicroModal.init({
    //     onShow: modal => console.info(`${modal.id} is shown`), // [1]
    //     onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    //     openTrigger: 'data-custom-open',
    //     closeTrigger: 'data-custom-close',
    //     disableScroll: true,
    //     disableFocus: false,
    //     awaitOpenAnimation: true,
    //     awaitCloseAnimation: true,
    //     debugMode: true
    // });
});
