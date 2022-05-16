let links = Array.from(document.getElementsByClassName("quicklink"))

links.forEach(setClickEvent)

function setClickEvent(link) {
    link.addEventListener("click", async () => {
        chrome.tabs.create({url: link.getAttribute("href"), active: false});
    });
}