// Ask permission for notifications
async function enableNotifications() {

    const button = document.getElementById("enable-notifications"); //Button to enable notifs
    const status = document.getElementById("notifications-status"); //Paragraph for the status notifications


    if (!("Notification" in window)) {
        alert("Notifications are not supported by this browser.");
        return;
    }

    if (!("serviceWorker" in navigator)){
        alert("Service Workers are not supported by this browser.");
        return;
    }

    const permission = await Notification.requestPermission();

    updateNotificationsInterface(button, status)

    if (permission !== "granted") {
        alert("Notifications were not enabled.");
        return;
    }

    const registration = await navigator.serviceWorker.ready;

    new Notification("ICPR 2026", {
        body: "Notifications are enabled.",
        icon: "/Logos/icprIcon-square-48.png"
    });
    
}

function initializeNotifications() {

    console.log("[Notifications] Initializing...");

    const button = document.getElementById("enable-notifications"); //Button to enable notifs
    const status = document.getElementById("notifications-status"); //Paragraph for the status notifications

    if (!button || !status) {
        console.error("[Notifications] HTML elements not found.");
        return;
    }

    button.addEventListener("click", enableNotifications);

    console.log("[Notifications] Initializatiion complete.");

    updateNotificationsInterface(button, status)
}

function updateNotificationsInterface(button, status) {

    switch (Notification.permission) {

        case "default":
            status.textContent = "Notifications are disabled.";
            break;

        case "granted":
            status.textContent = "✅ Notifications are enabled.";
            button.disabled = true;
            button.textContent = "Notifications enabled";
            break;

        case "denied":
            status.textContent = "❌ Notifications have been blocked.";
            button.disabled = true;
            button.textContent = "Notifications blocked";
            break;
    }

}
// // Find the button for notifications in html page
// document.addEventListener("DOMContentLoaded", () =>{ //Wait the full loading of the page 

//     console.log("DOM loaded");

//     const button = document.getElementById("enable-notifications");

//     if (button) {
//         console.log("Button found")

//         button.addEventListener("click", enableNotifications) //Add action on button to enable notifications
//     }

//     else {
//         console.log("Button not found");
//     }
// })

document.addEventListener("DOMContentLoaded", initializeNotifications);//Wait the full loading of the page
