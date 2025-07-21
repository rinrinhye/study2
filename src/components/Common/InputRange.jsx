const InputRange = ({
  min = 1,
  max = 100,
  value,
  step = 1,
  name,
  onChange,
}) => {
  const { low, high } = value;

  const span = max - min || 1;
  const lowPct = ((low - min) / span) * 100;
  const highPct = ((high - min) / span) * 100;

  const changeLow = (e) => {
    const raw = Number(e.target.value);
    onChange({ low: Math.min(raw, high), high });
  };

  const changeHigh = (e) => {
    const raw = Number(e.target.value);
    onChange({ low, high: Math.max(raw, low) });
  };

  return (
    <div className="relative h-2.5 select-none">
      <div
        className={`absolute inset-x-0 top-1/2 -translate-y-1/2 rounded-full h-full bg-gray-100`}
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-full rounded-full pointer-events-none bg-indigo-100`}
        style={{
          left: `${lowPct}%`,
          width: `${Math.max(highPct - lowPct, 0)}%`,
        }}
      />
      {/* low range */}
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={low}
        onChange={changeLow}
        className={rangeBaseClasses(8)}
        aria-label="Minimum value"
      />
      {/* high range */}
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={high}
        onChange={changeHigh}
        className={rangeBaseClasses(8)}
        aria-label="Maximum value"
      />
    </div>
  );
};

export default InputRange;

function rangeBaseClasses(trackHeight) {
  return [
    "absolute inset-0 w-full appearance-none bg-transparent",
    "pointer-events-none", // thumb만 이벤트 받도록
    // WebKit Thumb
    "[&::-webkit-slider-thumb]:appearance-none",
    "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4",
    "[&::-webkit-slider-thumb]:rounded-full",
    "[&::-webkit-slider-thumb]:bg-white",
    "[&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-300",
    "[&::-webkit-slider-thumb]:shadow",
    "[&::-webkit-slider-thumb]:transition",
    "[&::-webkit-slider-thumb]:pointer-events-auto",
    "focus:[&::-webkit-slider-thumb]:ring-4 focus:[&::-webkit-slider-thumb]:ring-blue-400/40",
    "hover:[&::-webkit-slider-thumb]:scale-105",
    // Firefox Thumb
    "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
    "[&::-moz-range-thumb]:rounded-full",
    "[&::-moz-range-thumb]:bg-white",
    "[&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-gray-300",
    "[&::-moz-range-thumb]:shadow",
    "[&::-moz-range-thumb]:transition",
    "[&::-moz-range-thumb]:pointer-events-auto",
    "focus:[&::-moz-range-thumb]:ring-4 focus:[&::-moz-range-thumb]:ring-blue-400/40",
    "hover:[&::-moz-range-thumb]:scale-105",
    // Firefox Track 투명화
    "[&::-moz-range-track]:bg-transparent [&::-moz-range-track]:border-none",
    // Height 맞추기 (Firefox에서 필요시)
    `h-[${trackHeight}px]`,
  ].join(" ");
}
