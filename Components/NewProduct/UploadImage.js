const UploadImage = ({ photo, setPhoto }) => {
  return (
    <div className="add-img-wrapper">
      <img
        src={
          photo ? URL.createObjectURL(photo) : "/images/upload-image-icon.svg"
        }
        alt="Test"
        className="add-img-wrapper"
      />
      <div>
        <input
          type="file"
          className="photo-input"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />
      </div>
    </div>
  );
};
export default UploadImage;
