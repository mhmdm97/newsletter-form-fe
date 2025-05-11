import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import FormField from '../common/FormField';
import CheckBoxList from '../common/CheckBoxList';
import { getCommunicationPreferences, getInterests, createSubscriber } from '../../api/endpoints';
import { validateForm } from '../../utils/validators';

// Define subscriber type enum to match backend
const SubscriberType = {
    HomeBuilder: 0,
    HomeBuyer: 1
};

const SubscriberForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        type: SubscriberType.HomeBuilder,
        interestIds: [],
        communicationPreferencesIds: []
    });
    const [communicationPreferences, setCommunicationPreferences] = useState([]);
    const [interests, setInterests] = useState([]);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [preferencesResponse, interestsResponse] = await Promise.all([
                    getCommunicationPreferences(),
                    getInterests()
                ]);
                
                setCommunicationPreferences(preferencesResponse.data);
                setInterests(interestsResponse.data);
                setLoadError(null);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoadError("Error loading form data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        
        // Special handling for radio buttons
        if (name === 'type' && type === 'radio') {
            setFormData({
                ...formData,
                [name]: parseInt(value, 10)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        
        // Clear error when field is edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const handleInterestsChange = (selectedIds) => {
        setFormData({
            ...formData,
            interestIds: selectedIds
        });
        
        // Clear error when field is edited
        if (errors.interestIds) {
            setErrors({
                ...errors,
                interestIds: null
            });
        }
    };

    const handleCommunicationPreferenceChange = (selectedIds) => {
        setFormData({
            ...formData,
            communicationPreferencesIds: selectedIds
        });
        
        // Clear error when field is edited
        if (errors.communicationPreferencesIds) {
            setErrors({
                ...errors,
                communicationPreferencesIds: null
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate the form
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        
        // If there are validation errors, don't submit
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            const response = await createSubscriber(formData);
            console.log('Subscriber created:', response.data);
            setSuccessMessage('Thank you for subscribing!');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                type: SubscriberType.HomeBuilder,
                interestIds: [],
                communicationPreferencesIds: []
            });
        } catch (error) {
            console.error('Error creating subscriber:', error);
            setErrors({ 
                submit: error.response?.data?.message || 'An error occurred while submitting the form.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return <div className="loading">Loading form data...</div>;
    }

    if (loadError) {
        return <div className="error-message">{loadError}</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            {successMessage && (
                <div className="success-message mb-6">
                    <p>{successMessage}</p>
                </div>
            )}
            
            {errors.submit && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-3 rounded-md mb-4">
                    <p>{errors.submit}</p>
                </div>
            )}
            
            <FormField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                error={errors.name}
            />
            
            <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={errors.email}
            />
            
            <FormField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                error={errors.phoneNumber}
            />
            
            <div className="form-group mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">I am a:</label>
                <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value={SubscriberType.HomeBuilder}
                            checked={formData.type === SubscriberType.HomeBuilder}
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                        />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">Home Builder</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value={SubscriberType.HomeBuyer}
                            checked={formData.type === SubscriberType.HomeBuyer}
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                        />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">Home Buyer</span>
                    </label>
                </div>
            </div>
            
            <CheckBoxList
                title="Select Interests"
                items={interests}
                selectedItems={formData.interestIds}
                onChange={handleInterestsChange}
                idKey="id"
                labelKey="name"
            />
            {errors.interestIds && (
                <div className="error-message">{errors.interestIds}</div>
            )}
            
            <CheckBoxList
                title="Communication Preferences"
                items={communicationPreferences}
                selectedItems={formData.communicationPreferencesIds}
                onChange={handleCommunicationPreferenceChange}
                idKey="id"
                labelKey="tag"
            />
            {errors.communicationPreferencesIds && (
                <div className="error-message">{errors.communicationPreferencesIds}</div>
            )}
            
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </Button>
        </form>
    );
};

export default SubscriberForm;