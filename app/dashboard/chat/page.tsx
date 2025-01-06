'use client';
import React, { useState, useEffect, useRef } from 'react';
import SearchInput from '../../components/ui/search-input';
import CircularKeyboard from '../../components/circular-keyboard';
import Button from '@/app/components/ui/button';
import Loader from '@/app/components/ui/loader';

const Page = () => {
  const [search, setSearch] = useState('');
  const [eegConnection, setEEGConnection] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prediction, setPrediction] = useState('');
  const websocketRef = useRef<WebSocket | null>(null);

  const handleChange = (input: string) => {
    setSearch(input);
  };

  const startEEG = async () => {
    setIsLoaded(false);
    
    const response = await fetch("http://localhost:8000/connect-egg", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();

    if (data.status === 'success') {
      setEEGConnection(true);
      // Start WebSocket connection once EEG is connected
      startClassification();
    } else {
      setEEGConnection(false);
    }

    setIsLoaded(true);
  };

  const startClassification = () => {
    const websocket = new WebSocket("ws://localhost:8000/ws/predict");

    websocket.onopen = () => {
      console.log("WebSocket connected");
      setEEGConnection(true);
    };

    websocket.onmessage = (event) => {
      const message = event.data;
      if (message === "stop") {
        websocket.close();
      } else {
        setPrediction(message);  // Update prediction
      }
    };

    websocket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setEEGConnection(false);
    };

    websocket.onclose = () => {
      console.log("WebSocket disconnected");
      setEEGConnection(false);
    };

    websocketRef.current = websocket;  // Store the WebSocket connection
  };

  const stopEEG = () => {
    if (websocketRef.current) {
      websocketRef.current.send("stop"); // Send "stop" signal to backend
      websocketRef.current.close();  // Close the WebSocket connection
    }
  };

  useEffect(() => {
    startEEG();



    return () => {
      if (websocketRef.current) {
        websocketRef.current.send("stop");
        websocketRef.current.close();
      }
    };
  }, []);

  const handleKeyPress = (key: string) => {
    if (key === 'Space') {
      setSearch((prev) => prev + ' ');
    } else if (key === 'Backspace') {
      setSearch((prev) => prev.slice(0, -1));
    } else if (key === 'Enter') {
      console.log('Search submitted:', search);
    } else {
      setSearch((prev) => prev + key);
    }
  };

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className='flex-1 flex flex-col p-2 lg:p-4'>
      <div className='mt-1 lg:mt-0'>
        {eegConnection ? (
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-xl font-semibold lg:text-2xl'>What can I help you with?</h1>
            <SearchInput input={search} onChange={(e: any) => handleChange(e.target.value)} />
            <h1 className='mt-8 text-lg font-semibold'>My Virtual Keyboard</h1>
            <div className="flex justify-center">
              <CircularKeyboard onKeyPress={handleKeyPress} />
            </div>
            <div className='mt-4 text-lg'>Prediction: {prediction}</div>
            <div className='mt-8'>
              <Button onClick={stopEEG}>Stop EEG</Button>  {/* Stop EEG Button */}
            </div>
          </div>
        ) : (
          <div className='flex flex-col text-center'>
            <h1 className='mt-32 text-lg font-semibold'>
              EEG Device is not connected
            </h1>
            <p className='mt-4 text-sm'>
              Please ensure that you have properly connected the EEG device
            </p>

            <div className='mt-8'>
              <Button onClick={startEEG}>
                <div className='flex items-center gap-3'>
                  <span>Try Again</span>
                </div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
