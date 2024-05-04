import React from "react";
import * as S from "./misc.styles";
interface TimeData {
  utc_datetime: string;
}

const Misc = () => {
  const [brusselsTime, setBrusselsTime] = React.useState<Date | null>(null);

  React.useEffect(() => {
    const fetchBrusselsTime = async () => {
      try {
        const response = await fetch(
          "https://worldtimeapi.org/api/timezone/Europe/Brussels"
        );
        const data: TimeData = await response.json();
        const brusselsTime = new Date(data.utc_datetime);
        setBrusselsTime(brusselsTime);
      } catch (error) {
        console.error("Error fetching Brussels time:", error);
      }
    };
    const intervalId = setInterval(fetchBrusselsTime, 1000);
    fetchBrusselsTime();
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: Date | null): string => {
    if (!time) return "Loading...";
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return time.toLocaleTimeString("en-US", options);
  };

  return (
    <S.MiscContainer>
      <div>
        <div className="title__container">
          <h2>Availability</h2>
        </div>
        <div className="info__container">
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#91FF3A",
              borderRadius: "100%",
            }}
          ></span>
          <h3>Available</h3>
        </div>
      </div>
      <div>
        <div className="title__container">
          <h2>Download</h2>
        </div>
        <div className="info__container">
          <span>
            <svg
              width="18"
              height="25"
              viewBox="0 0 18 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7699 7.18141V0.806412H1.91577C1.32697 0.806412 0.853271 1.30797 0.853271 1.93141V23.6814C0.853271 24.3048 1.32697 24.8064 1.91577 24.8064H16.7908C17.3796 24.8064 17.8533 24.3048 17.8533 23.6814V8.30641H11.8324C11.2481 8.30641 10.7699 7.80016 10.7699 7.18141ZM14.1544 17.0889L9.88585 21.5748C9.59145 21.8847 9.11598 21.8847 8.82158 21.5748L4.55298 17.0889C4.10364 16.6169 4.41884 15.8064 5.05103 15.8064H7.9366V12.0564C7.9366 11.642 8.25358 11.3064 8.64494 11.3064H10.0616C10.453 11.3064 10.7699 11.642 10.7699 12.0564V15.8064H13.6555C14.2877 15.8064 14.6029 16.6169 14.1544 17.0889ZM17.5434 5.72829L13.2093 1.13454C13.01 0.923599 12.74 0.806412 12.4567 0.806412H12.1866V6.80641H17.8533V6.52047C17.8533 6.22516 17.7426 5.93922 17.5434 5.72829Z"
                fill="black"
              />
            </svg>
          </span>
          <h3>Download</h3>
        </div>
      </div>
      <div>
        <div className="title__container">
          <h2>Location</h2>
        </div>
        <div
          className="info__container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            width="21"
            height="25"
            viewBox="0 0 21 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75191 24.2128C2.24643 14.1161 0.853271 13.0799 0.853271 9.36914C0.853271 4.28628 5.29365 0.165833 10.7712 0.165833C16.2487 0.165833 20.6891 4.28628 20.6891 9.36914C20.6891 13.0799 19.2959 14.1161 11.7905 24.2128C11.2979 24.8731 10.2444 24.873 9.75191 24.2128ZM10.7712 13.2039C13.0535 13.2039 14.9036 11.487 14.9036 9.36914C14.9036 7.25128 13.0535 5.53443 10.7712 5.53443C8.48887 5.53443 6.63872 7.25128 6.63872 9.36914C6.63872 11.487 8.48887 13.2039 10.7712 13.2039Z"
              fill="black"
            />
          </svg>

          <h3>
            Brussels Time:
            <div>{formatTime(brusselsTime)}</div>
          </h3>
        </div>
      </div>
    </S.MiscContainer>
  );
};
export default Misc;
