const Location = () => {
  return (
    <div
      id="location"
      className="relative h-[500px] w-full flex justify-center items-center overflow-hidden"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2808.9499526640466!2d19.84546455662232!3d45.248804793501684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11007e79a3e9%3A0x58bb57173e0a120a!2z0JDQtNCy0L7QutCw0YLRgdC60LAg0LrQsNC90YbQtdC70LDRgNC40ZjQsCDQodGC0LXQs9C40Zsg0JvQsNC30LjRmw!5e0!3m2!1sen!2srs!4v1713695461694!5m2!1sen!2srs"
        height="500"
        loading="lazy"
        width="100%"
        title="Google Map showing the location of Law office Stegic Lazić"
        className="object-cover flex absolute xs:relative top-0 left-0 h-full w-full"
      ></iframe>
    </div>
  );
};

export default Location;
