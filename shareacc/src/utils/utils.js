export function goto(url){
    window.location.href = url;
}

export function reload(){
    window.location.reload();
}
export function notNull(str){
    return str !== undefined && str != null;
}
export function logOut() {
    removeCookie("Authorization");
    goto("/");
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function removeCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

export function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
export function removeLastSlash(input){
    if (input.charAt(input.length - 1) === "/") {
        return input.substr(0, input.length - 1)
    } else {
        return input;
    }
}
export function getPathParam(index){
    // TODO
    return 1;
}