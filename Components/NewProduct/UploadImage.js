const UploadImage = () => {
  return (
    <div className="add-img-wrapper">
      <img
        src="/images/upload-image-icon.svg"
        alt="Test"
        className="add-img-wrapper"
      />
      <div>
        <input type="file" className="photo-input" />
      </div>
    </div>
  );
};
export default UploadImage;
