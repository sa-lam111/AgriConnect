import * as notificationService from '../services/notification.service.js';

export const create = async (req, res) => {
    try {
        // This would likely come from the authenticated user's session
        const userId = req.user.id; 
        const { message } = req.body;
        const notification = await notificationService.createNotification(userId, message);
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available from auth middleware
        const notifications = await notificationService.getNotifications(userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateToRead = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const notification = await notificationService.markAsRead(notificationId);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
