addEventListener('push', (e) => {
    console.log('push arrived');
    self.registration.showNotification('hello world', {
        data:{ url:'/push.html'}
    });
});

self.addEventListener('notificationclick', function(event) {
    var url = event.notification.data.url || "";
    console.log('On notification click: ', event.notification.data.url);
    if (url != "")
        event.waitUntil(clients.openWindow(url));
  
  });