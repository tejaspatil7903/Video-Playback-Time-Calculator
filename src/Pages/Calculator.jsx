import React, { useState } from "react";

export default function Calculator() {
  const [formData, setFormData] = useState({
    hr: "",
    min: "",
    sec: "",
    playback: "",
  });
  const [videoDuration, setVideoDuration] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeRequired, setTimeRequired] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function convertToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }

  function convertSecondsToHMS(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  function calculateTimeRequired() {
    const { hr, min, sec, playback } = formData;
    const hours = parseInt(hr, 10) || 0;
    const minutes = parseInt(min, 10) || 0;
    const seconds = parseInt(sec, 10) || 0;
    const playbackSpeed = parseFloat(playback) || 1; // Default to 1 if playback is invalid

    // Convert the video duration to seconds
    const durationInSeconds = convertToSeconds(hours, minutes, seconds);
    setVideoDuration(convertSecondsToHMS(durationInSeconds));

    // Calculate the time required based on playback speed
    const requiredTimeInSeconds = durationInSeconds / playbackSpeed;
    setTimeRequired(convertSecondsToHMS(requiredTimeInSeconds));
  }

  return (
    <div>
      <form>
        <div className="flex justify-center items-center gap-x-2 mt-4">
          <label
            htmlFor="hr"
            className="border border-black rounded-sm flex flex-col justify-center items-center gap-1 p-2"
          >
            <p>Hours</p>
            <input
              type="number"
              id="hr"
              placeholder="Hr"
              value={formData.hr}
              name="hr"
              onChange={changeHandler}
              className="pl-1 focus:outline-none"
            />
          </label>

          <label
            htmlFor="min"
            className="border border-black rounded-sm flex flex-col justify-center items-center gap-1 p-2"
          >
            <p>Minutes</p>
            <input
              type="number"
              id="min"
              placeholder="Min"
              value={formData.min}
              name="min"
              onChange={changeHandler}
              className="pl-1 focus:outline-none"
            />
          </label>

          <label
            htmlFor="sec"
            className="border border-black rounded-sm flex flex-col justify-center items-center gap-1 p-2"
          >
            <p>Seconds</p>
            <input
              type="number"
              id="sec"
              placeholder="Sec"
              value={formData.sec}
              name="sec"
              onChange={changeHandler}
              className="pl-1 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex justify-center mt-3">
          <label
            htmlFor="playback"
            className="border border-black rounded-sm flex flex-col justify-center items-center gap-1 p-2"
          >
            <p>PlayBack Speed</p>
            <input
              type="number"
              id="playback"
              placeholder="Playback"
              value={formData.playback}
              name="playback"
              onChange={changeHandler}
              className="pl-1 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={calculateTimeRequired}
            className="bg-green-600 py-3 px-4 rounded-md hover:bg-green-800 transition-all text-white"
          >
            Calculate
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center mt-4">
        <p>
          Video Duration: {videoDuration.hours} hours, {videoDuration.minutes}{" "}
          minutes, {videoDuration.seconds} seconds
        </p>
        <p>
          Time Required: {timeRequired.hours} hours, {timeRequired.minutes}{" "}
          minutes, {timeRequired.seconds} seconds
        </p>
      </div>
    </div>
  );
}
