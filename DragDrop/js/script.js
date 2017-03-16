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
