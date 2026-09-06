import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
        backgroundColor: "#a44630",
        color: "#f7f6f2",
        fontSize: 34,
        fontWeight: 700,
        fontFamily: "sans-serif",
      }}
    >
      cl.
    </div>,
    { ...size },
  );
}
