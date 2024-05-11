import React, { useState } from 'react';
import axios from 'axios';

// Define an interface for the expected response to ensure type safety
interface ApiResponse {
    success: boolean;
    prediction: string;
    data?: any;
}

const ImageUploadComponent: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [response, setResponse] = useState<ApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading state

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFile(null);
            setPreviewUrl(null);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const result = await axios.post<ApiResponse>('http://3.101.27.195/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log( result.data); 
            setResponse(result.data);
        } catch (error) {
            console.error('Error:', error);
            setResponse({
                success: false,
                prediction: 'Failed to upload photo',
                data: error
            });
        } finally {
            setIsLoading(false); 
        }
    };

    return (<div style={{ background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'}}>

<div style={{ padding: '20px', textAlign: 'center' }}>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {previewUrl && (
                <div style={{ marginTop: '10px' }}>
                    <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            <button onClick={handleUpload} style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                {isLoading ? 'Uploading...' : 'Upload'}
            </button>
            {response && (
                <div style={{ marginTop: '20px', color: response.success ? 'green' : 'red',fontSize:50 }}>
                    <p>{response.prediction}</p>
                    {response.data && <pre>{JSON.stringify(response.data, null, 2)}</pre>}
                </div>
            )}
        </div>
    </div>
        
    );
};

export default ImageUploadComponent;
