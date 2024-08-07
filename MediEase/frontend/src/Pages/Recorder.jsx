import React from 'react';
import AudioTimer from '../Components/AudioTimer';
import { ReactMic } from 'react-mic';
import { useNavigate } from 'react-router-dom';

const Recorder = () => {
    const navigate = useNavigate();
    const [isRunning, setIsRunning] = React.useState(false);
    const [elapsedTime, setElapsedTime] = React.useState(0);
    const [voice, setVoice] = React.useState(false);
    const [recordBlobLink, setRecordBlobLink] = React.useState(null);

    const onStop = (recordedBlob) => {
        setRecordBlobLink(recordedBlob.blobURL);
        setIsRunning(false);
        localStorage.setItem('recordedAudio',recordedBlob.blobURL);
        fetch(recordedBlob.blobURL)
        .then(res => res.blob())
        .then(blob => {
            handler(blob)
        });

        function handler(inputBlob) {

            const url = URL.createObjectURL(inputBlob);
            // Creates URL to the image Blob in memory
        
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', 'audio.webm');
            // Create a download link in HTML
        
            a.style.display = 'none';
            document.body.appendChild(a);
        
            a.click(); // Simulates click
        
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            // Removes download link and image URL and image from memory
        
        }
    };

    const startHandle = () => {
        setElapsedTime(0)
        setIsRunning(true)
        setVoice(true)
    }
    const stopHandle = () => {
        setIsRunning(false)
        setVoice(false)
    }

    const clearHandle = () => {
        setIsRunning(false)
        setVoice(false)
        setRecordBlobLink(false)
        setElapsedTime(0)
    }

    const handleClick = () => {
        navigate('/patient');
    }

    return (
        <div>
            <div className=" max-w-sm border py-4 px-6 mx-auto bg-black  ">
                <h2 className=" text-[22px] font-semibold ">Audio Recorder</h2>
                <AudioTimer isRunning={isRunning}
                    elapsedTime={elapsedTime}
                    setElapsedTime={setElapsedTime} />

                <ReactMic
                    record={voice}
                    className="sound-wave w-full "
                    onStop={onStop}
                    strokeColor="#000000"
                />
                
                <div className="">
                    {recordBlobLink ? <button onClick={clearHandle} className="text-[#fff] font-medium text-[16px] "> Clear </button> : ""}
                </div>
                <div className=" mt-2  ">
                    {!voice ? <button onClick={startHandle} className=" bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px] ">Start</button> : <button onClick={stopHandle} className=" bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px] ">Stop</button>}
                </div>
                <div className="">
                    {recordBlobLink ? <audio controls src={recordBlobLink} className="mt-6" /> : ""}
                </div>
                <button className='m-2' onClick={handleClick}>Finish Recording</button>
            </div>
        </div>
    )
}

export default Recorder;