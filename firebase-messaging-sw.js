/* global importScripts, firebase, clients */

importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js");

(function bootstrapMessagingServiceWorker() {
  const url = new URL(self.location.href);
  const config = {
    apiKey: url.searchParams.get("apiKey") || "",
    authDomain: url.searchParams.get("authDomain") || "",
    projectId: url.searchParams.get("projectId") || "",
    storageBucket: url.searchParams.get("storageBucket") || "",
    messagingSenderId: url.searchParams.get("messagingSenderId") || "",
    appId: url.searchParams.get("appId") || "",
  };

  if (!config.apiKey || !config.projectId || !config.messagingSenderId || !config.appId) {
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  firebase.messaging();
})();

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const existingClient = clientList.find((client) => "focus" in client);
      if (existingClient) {
        if ("focus" in existingClient) {
          existingClient.focus();
        }
        if ("navigate" in existingClient) {
          return existingClient.navigate("/#/");
        }
        return existingClient;
      }

      return clients.openWindow("/#/");
    })
  );
});
