import apiClient from './apiClient';

export const getCommunicationPreferences = async () => {
  const response = await apiClient.get('/CommunicationPreference');
  return response.data;
};

export const getInterests = async () => {
  const response = await apiClient.get('/Interest');
  return response.data;
};

export const createSubscriber = async (subscriberData) => {
  const response = await apiClient.post('/Subscriber', subscriberData);
  return response.data;
};

export const getSubscriberById = async (id) => {
  const response = await apiClient.get(`/Subscriber/${id}`);
  return response.data;
};

export const getSubscribers = async () => {
  const response = await apiClient.get('/Subscriber');
  return response.data;
};

export const deleteSubscriber = async (id) => {
  const response = await apiClient.delete(`/Subscriber/${id}`);
  return response.data;
};