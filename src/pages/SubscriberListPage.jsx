import React, { useState, useEffect } from 'react';
import { getSubscribers, deleteSubscriber } from '../api/endpoints';
import Button from '../components/common/Button';

const SubscriberListPage = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const fetchSubscribers = async () => {
        try {
            setIsLoading(true);
            const response = await getSubscribers();
            setSubscribers(response.data || []);
            setError(null);
        } catch (err) {
            setError('Failed to load subscribers. Please try again later.');
            console.error('Error fetching subscribers:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const handleDeleteSubscriber = async (id, name) => {
        if (window.confirm(`Are you sure you want to delete subscriber "${name}"?`)) {
            try {
                await deleteSubscriber(id);
                setDeleteMessage(`Subscriber "${name}" has been deleted successfully.`);
                // Refresh the list
                fetchSubscribers();
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    setDeleteMessage(null);
                }, 3000);
            } catch (err) {
                setError(`Failed to delete subscriber: ${err.response?.data?.message || 'Unknown error'}`);
                console.error('Error deleting subscriber:', err);
            }
        }
    };

    if (isLoading) {
        return <div className="loading">Loading subscribers...</div>;
    }

    return (
        <div className="py-8">
            <main className="container max-w-4xl mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold text-center mb-6">Subscriber Management</h2>
                
                {error && (
                    <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-3 rounded-md mb-4">
                        <p>{error}</p>
                    </div>
                )}
                
                {deleteMessage && (
                    <div className="success-message mb-6">
                        <p>{deleteMessage}</p>
                    </div>
                )}
                
                {subscribers.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        No subscribers found.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300">Name</th>
                                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300">Email</th>
                                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300">Phone</th>
                                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300">Type</th>
                                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map(subscriber => (
                                    <tr key={subscriber.id} className="border-t border-gray-200 dark:border-gray-700">
                                        <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{subscriber.name}</td>
                                        <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{subscriber.email}</td>
                                        <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{subscriber.phoneNumber}</td>
                                        <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                                            {subscriber.type === 0 ? 'Home Builder' : 'Home Buyer'}
                                        </td>
                                        <td className="py-3 px-4">
                                            <Button 
                                                onClick={() => handleDeleteSubscriber(subscriber.id, subscriber.name)}
                                                className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SubscriberListPage;