import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Chaitanya S. - Applied AI Engineering Portfolio';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0d1117',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            color: '#60a5fa',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '2px',
            marginBottom: 20,
            textTransform: 'uppercase',
          }}
        >
          Portfolio Preview
        </div>

        <div
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Chaitanya S.
        </div>

        <div
          style={{
            color: '#e5e7eb',
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          Applied AI Engineering Portfolio
        </div>

        <div
          style={{
            color: '#9ca3af',
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          RAG · LLM Applications · Agentic AI · Document Intelligence
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
