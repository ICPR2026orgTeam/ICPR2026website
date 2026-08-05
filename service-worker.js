self.addEventListener("install", event => {
    console.log("Service worker installed");
});

self.addEventListener("activate", event => {
    console.log("Service worker activated");
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

self.addEventListener("notificationclick", event => {

    console.log("[Service Worker] Notification clicked.")

    event.notification.close();

    const targetUrl = event.notification.data?.url || "/";

    event.waitUntil(
        clients.matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (const client of windowClients){
                if (client.url === new URL(targetUrl, self.location.origin).href) {
                    return client.focus();
                }
            }
            return clients.openWindow(targetUrl);
        }) 
    );
});