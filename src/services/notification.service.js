import Notification from '../model/notification.model.js';

export const createNotification = async (userId, message) => {
    const notification = new Notification({
        user: userId,
        message
    });
    await notification.save();
    return notification;
};

export const getNotifications = async (userId) => {
    return await Notification.find({ user: userId }).sort({ createdAt: -1 });
};

export const markAsRead = async (notificationId) => {
    const notification = await Notification.findById(notificationId);
    if (!notification) {
        throw new Error('Notification not found');
    }
    notification.read = true;
    await notification.save();
    return notification;
};
