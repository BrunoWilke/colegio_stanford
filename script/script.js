async function injectContent(){

    let url = location.href; 
    file = url.split('=');
    let view = (file[1] != undefined) ? file[1] : file[1] = 'home'; 
    const resp = await fetch (`pages/${file[1]}.html`);
    const html = await resp.text();
    let inject = document.getElementById('content');
    inject.innerHTML =html;
}

injectContent();
