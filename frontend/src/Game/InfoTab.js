const formatTime = (ms) => {
    if (ms < 20 * 1000) {
        // Under 20 seconds: show as SS.CC
        const seconds = Math.floor(ms / 1000);
        const centiseconds = Math.round((ms % 1000) / 10);
        return {
            main: String(seconds).padStart(2, '0'),
            separator: '.',
            fractional: String(centiseconds).padStart(2, '0'),
        };
    } else {
        // 20 seconds or more: show as MM:SS
        const minutes = Math.floor(ms / (60 * 1000));
        const seconds = Math.floor((ms % (60 * 1000)) / 1000);
        return {
            main: String(minutes).padStart(2, '0'),
            separator: ':',
            fractional: String(seconds).padStart(2, '0'),
        };
    }
};

const TimeToComponent = ({ timeState }) => {
    const isTimeLow = timeState < 20 * 1000;
    const { main, separator, fractional } = formatTime(timeState);

    return (
        <div
            style={{ ...clock, backgroundColor: isTimeLow ? 'red' : 'white' }}
            aria-label={`Time left: ${main}${separator}${fractional}`}
        >
            {[...main, separator, ...fractional].map((digit, index) => (
                <div key={index} style={number}>{digit}</div>
            ))}
        </div>
    );
};
