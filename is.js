
function attachState(type) {
    var _temp = history[type];
    return function() {
        let reWriteEvent = _temp.apply(this, arguments);
       var event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        console.log('-------------------------'+type)
        return reWriteEvent;
    };
 };
 function isSinglePage(){
    let _is_singPage = false
    history.pushState = attachState('pushState');
    history.replaceState = attachState('replaceState');

    window.addEventListener('replaceState', function(e) {
        _is_singPage = true
        return _is_singPage
    });
    window.addEventListener('pushState', function(e) {
        _is_singPage = true
        return _is_singPage
    });
    return _is_singPage
}
let c = isSinglePage();
c;
