import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ paddingLeft: ' 20px' }}>
      <ThreeCircles
        height="80"
        width="80"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="rgba(76, 198, 255, 0.979)"
        innerCircleColor="rgba(230, 247, 255, 0.979"
        middleCircleColor="rgba(76, 198, 255, 0.979)"
      />
    </div>
  );
};
