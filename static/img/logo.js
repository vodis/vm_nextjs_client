export const VoMariLogo = ({ width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
    >
        <image
            width={width}
            height={height}
            data-name="VO MARI logo"
            xlinkHref="data:img/png;base64,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"
        ></image>
    </svg>
);