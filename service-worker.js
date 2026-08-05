self.addEventListener("install", event => {
    console.log("Service worker installed");
});

self.addEventListener("activate", event => {
    console.log("[Service Worker] activated");

    event.waitUntil(
        self.clients.claim()
    );
});

//Push Notification when one is received
self.addEventListener("push", event => {
    console.log("[Service Worker] Push received.");

    let data ={
        title: "ICPR 2026",
        body: "New conference notification.",
        icon: "/Logos/icprIcon-square-48.png",
        url: "/"
    };

    if (event.data) {
        try{
            data = {
                ...data,
                ...event.data.json()
            };
        } catch (error) {
            console.warn(
                "[Service Worker] Push payload is ot JSON, using texte instead."
            );

            data.body= event.data.text();
        }
    }

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            data: {
                url: data.url
            }
        })
    );
});

self.addEventListener("push", event => {
    console.log("[Service Worker] Push received.", event.data);

    let data = {
        title: "ICPR 2026",
        body: "New conference notification.",
        icon: "/Logos/icprIcon-square-48.png",
        url: "/"
    };

    if (event.data) {
        try {
            data = {
                ...data,
                ...event.data.json()
            };

            console.log("[Service Worker] Data:", data);
        } catch (error) {
            console.warn("[Service Worker] Payload is not JSON:", error);
            data.body = event.data.text();
        }
    }

    console.log("[Service Worker] Showing notification...");

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            data: {
                url: data.url
            }
        })
        .then(() => {
            console.log("[Service Worker] Notification shown.");
        })
        .catch(error => {
            console.error(
                "[Service Worker] showNotification failed:",
                error
            );
        })
    );
});
