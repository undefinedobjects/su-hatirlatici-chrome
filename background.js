/**
 * @file Otuz dakikada bir su içmenizi hatırlatan chrome eklentisi
 * @author undefined objects
 */

const getNotifications = () => {

	return [
		'Su iç birader',
		'Bak kardeşim su içmen lazım',
		'Al şu bildirimi git biraz su iç yiğenim',
		'Hadi hadi genç adamsın kalk bir su iç'
	];

}

const getRandomNotification = () => {
	
	const notifications = getNotifications();
	return notifications[ Math.floor(Math.random() * notifications.length) ];

}

const pushNotification = () => {
	
	const notificationId = Math.random();

	chrome.notifications.create(notificationId.toString(), {   

		type: 'basic', 
		iconUrl: 'icon.png', 
		title: 'Su Hatırlatıcı', 
		message: getRandomNotification()

	});
	
}

//Run Every 30 minutes
setInterval(() => {

	pushNotification();

}, ((60 * 1000) * 30));

//Run Now
pushNotification();