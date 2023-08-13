export default function CustomImage({imageSrc}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc}), url("/images/default-post-image.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "400px",
        height: "250px",
      }}
    ></div>
  );
}
