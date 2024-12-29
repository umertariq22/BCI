'use client';

import React, { useEffect, useState } from 'react';
import Button from '../ui/button';

interface StopwatchProps {
    currentState: string | null;
}

const Stopwatch: React.FC<StopwatchProps> = ({ currentState }) => {
    const [time, setTime] = useState(1200000);
    const [isRunning, setIsRunning] = useState(false);
    const [showStopConfirmModal, setShowStopConfirmModal] = useState(false);
    const [showResetConfirmModal, setShowResetConfirmModal] = useState(false);

    useEffect(() => {
        setTime(1200000);
        setIsRunning(false);
    }, [currentState]);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 10);
            }, 10);
        } else if (!isRunning && timer) {
            clearInterval(timer);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning, time]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    };

    const handleStartPause = () => {
        if (isRunning) {
            setShowStopConfirmModal(true);
        } else {
            setIsRunning(true);
        }
    };

    const handleConfirmStop = (confirm: boolean) => {
        if (confirm) {
            setIsRunning(false);
        }
        setShowStopConfirmModal(false);
    };

    const handleReset = () => {
        setShowResetConfirmModal(true);
    };

    const handleConfirmReset = (confirm: boolean) => {
        if (confirm) {
            setTime(1200000);
            setIsRunning(false);
        }
        setShowResetConfirmModal(false);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col lg:flex-row gap-4">
                <Button onClick={handleStartPause}>
                    {isRunning ? 'Stop' : 'Start'}
                </Button>
                <div className="text-5xl bg-white font-mono rounded-2xl p-5">
                    {formatTime(time)}
                </div>
                <Button onClick={handleReset} className="!bg-primary">
                    Reset
                </Button>
            </div>
            {showStopConfirmModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-[100]">
                    <div className="bg-white rounded-lg w-full max-w-xl">
                      <div className='p-5'>
                        <h1 className='text-lg font-semibold'>Stop the timer</h1>
                        <p className='text-gray-600'>Are you sure you want to stop the timer?</p>
                      </div>
                        <div className="flex justify-end space-x-4 py-4 px-4 border-t">
                            <Button onClick={() => handleConfirmStop(false)} className="!bg-gray-100 !text-gray-700">
                                No
                            </Button>
                            <Button onClick={() => handleConfirmStop(true)}>
                                Yes
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {showResetConfirmModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-[100]">
                    <div className="bg-white rounded-lg w-full max-w-xl">
                      <div className='p-5'>
                        <h1 className='text-lg font-semibold'>Reset the timer</h1>
                        <p className='text-gray-600'>Are you sure you want to reset the timer?</p>
                      </div>
                        <div className="flex justify-end space-x-4 py-4 px-4 border-t">
                            <Button onClick={() => handleConfirmReset(false)} className="!bg-gray-100 !text-gray-700">
                                No
                            </Button>
                            <Button onClick={() => handleConfirmReset(true)}>
                                Yes
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stopwatch;
