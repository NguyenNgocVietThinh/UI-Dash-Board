const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires"+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/"
}

function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(";")
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

loadTheme()



function loadTheme() {
    var theme = getCookie(themeCookieName)
    body.classList.add(theme === "" ? themeLight : theme)
}

function switchTheme() {
    if (body.classList.contains(themeLight)) {
        body.classList.remove(themeLight)
        body.classList.add(themeDark)
        setCookie(themeCookieName, themeDark)
    } else {
        body.classList.remove(themeDark)
        body.classList.add(themeLight)
        setCookie(themeCookieName, themeLight)
    }
}

function collapseSidebar() {
    body.classList.toggle('sidebar-expand')
}

window.onclick = function(event) {
    openCloseDropDown(event)
}

function closeAllDropDown() {
    var dropdown = document.getElementsByClassName('dropdown-expand')
    for(var i = 0; i < dropdown.length; i++){
        dropdown[i].classList.remove('dropdown-expand')
    }
}

function openCloseDropDown(event){
    if (!event.target.matches('.dropdown-toggle')) {
        closeAllDropDown()
    }else{
        var toggle = event.target.dataset.toggle
        var content = document.getElementById(toggle)
        if(content.classList.contains('dropdown-expand')) {
            closeAllDropDown()
        }else{
            closeAllDropDown()
            content.classList.add('dropdown-expand')
        }
    }
}