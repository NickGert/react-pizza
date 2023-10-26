import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={244}
    height={485}
    viewBox="0 0 244 485"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="104" y="549" rx="0" ry="0" width="14" height="3" />
    <rect x="101" y="545" rx="0" ry="0" width="2" height="4" />
    <rect x="174" y="509" rx="10" ry="10" width="115" height="57" />
    <rect x="12" y="514" rx="0" ry="0" width="92" height="46" />
    <rect x="103" y="560" rx="0" ry="0" width="2" height="0" />
    <rect x="105" y="560" rx="0" ry="0" width="1" height="0" />
    <rect x="106" y="560" rx="0" ry="0" width="8" height="0" />
    <circle cx="125" cy="146" r="110" />
    <rect x="0" y="264" rx="10" ry="10" width="245" height="25" />
    <rect x="0" y="310" rx="10" ry="10" width="245" height="79" />
    <rect x="0" y="410" rx="10" ry="10" width="93" height="36" />
    <rect x="123" y="408" rx="10" ry="10" width="124" height="51" />
  </ContentLoader>
);

export default Skeleton;
