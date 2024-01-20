import styled from "styled-components";

const PulseImage = () => {
  return (
    <div>
      <Shimmer>TestTestTestTest</Shimmer>
    </div>
  );
};

const Shimmer = styled.div`
  background: #f5f5f5;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export default PulseImage;
