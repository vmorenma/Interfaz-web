$(init);

function init() {
    $('#makeMeDraggable').draggable(
        {
            containment: "#content"
        },
        {
            axis: 'x'
        },
        {
            snap: '#makeMeDroppable'
        },
        {
            drag:handleDragEvent
        }
    );
    $('#makeMeDroppable').droppable(
        {
            drop: handleDropEvent
        }
    );
}

function handleDropEvent(event, ui) {
    window.location.href = 'http://www.example.com';
}

function handleDragEvent(event, ui){
    $('.dashdiv').css("width",300-(event.clientX-450));
    console.log(300-(event.clientX-450))
}
