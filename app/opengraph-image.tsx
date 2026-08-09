import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Chaitanya S. - Applied AI Engineering Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      
        
          Portfolio Preview
        

        
          Chaitanya S.
        

        
          Applied AI Engineering Portfolio
        

        
          RAG · LLM Applications · Agentic AI · Document Intelligence
        
      
    ),
    {
      ...size,
    }
  );
}
