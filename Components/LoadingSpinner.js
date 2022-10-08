const LoadingSpinner = ({ loading }) => {
  return (
    <div className={`lds-ring ${loading}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default LoadingSpinner;
