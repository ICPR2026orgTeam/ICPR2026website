const API_BASE_URL = "http://localhost:3000";

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

    try{
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
            const subscription = await subscribeUserToPush();

            console.log(
                "[Notifications] Push subscription:",
                subscription
            );

            await sendSubscriptionToServer(subscription);
        }
    } catch (error) {
        console.error(
            "[Notifications] Unable to enable notifications:",
            error
        );

        if (status) {
            status.textContent = 
                "An error occured while enabling notifications.";
        }
    }

    updateNotificationsInterface(button, status);

    const registration = await navigator.serviceWorker.ready;

    new Notification("ICPR 2026", {
        body: "Notifications are enabled.",
        icon: "/Logos/icprIcon-square-48.png"
    });
    
}

//Create the subscription
async function subscribeUserToPush(){
    const registration = await navigator.serviceWorker.ready;

    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
        const vapidPublicKey = await getVapidPublicKey();

        subscription =await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
        });
    }

    return subscription;
}

//Convert url to Uint8 array
function urlBase64ToUint8Array(base64String){

    const padding = "=".repeat((4 - base64String.length % 4) % 4);

    const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);

    return Uint8Array.from(
        [...rawData].map(character => character.charCodeAt(0))
    );

}

//Send subscription
async function sendSubscriptionToServer(subscription) {
    const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription)
    });

    if (!response.ok) {
        throw new Error(
            `Server returned HTTP ${response.status}`
        );
    }

    const result = await response.json();

    console.log(
        "[Notifications] Subscription sent to server:",
        result
    );

    return result;
}

//Ask public key to backend
async function getVapidPublicKey() {
    const response = await fetch(`${API_BASE_URL}/vapidPublicKey`);
    
    if (!response.ok) {
        throw new Error(
            `Unable to retreive VAPID public key:  HTTP ${response.status}`
        );
    }

    const data = await response.json();

    if (!data.publicKey) {
        throw new Error("VAPID public key is missing.");
    }

    return data.publicKey;
}

//Init of notifications
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
    status.classList.remove("is-enabled", "is-blocked");

    switch (Notification.permission) {

        case "default":

            button.disabled = false;
            button.textContent = "Enable notifications";
            status.textContent = "⚪ Notifications are disabled.";
            break;

        case "granted":

            status.textContent = "Notifications are enabled.";
            button.hidden = true;
            status.classList.add("is-enabled");
            break;

        case "denied":

            status.textContent = "Notifications have been blocked.";
            button.hidden = true;
            status.classList.add("is-blocked");
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
