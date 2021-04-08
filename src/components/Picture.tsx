import { motion } from "framer-motion";
import { useState, CSSProperties } from "react";

interface Props {
  src?: string;
  style?: CSSProperties;
  className?: string;
  overlayed?: boolean;
  onClick?: () => void;
  caption?: React.ReactNode;
  layoutId?: string;
  transition?: any;
}

const greyPng = `, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNMO8OAARiHsiAAVkoL/1ec1jIAAAAASUVORK5CYII=)`;

const Picture: React.FunctionComponent<Props> = (props) => {
  const { style, src, overlayed, onClick, layoutId, transition } = props;
  const [opacity, setOpacity] = useState(0);
  const [animate, setAnimate] = useState(true);

  const loaded = () => {
    if (!opacity) {
      setOpacity(1);
      setTimeout(() => {
        setAnimate(false);
      }, 300);
    }
  };

  return (
    <div
      className={
        `image-container ${props.className} ` + (animate ? "" : "loaded")
      }
      style={{ ...style }}
      onClick={onClick}
    >
      <motion.div
        className={"image-div" + (overlayed ? " overlay" : "")}
        style={{
          backgroundImage: `url(${src}) ${overlayed ? greyPng : ""}`,
        }}
        layoutId={layoutId}
        transition={transition}
      >
        <figure>
          <motion.img className="hidden" src={src} onLoad={loaded} />
          {props.caption ? <figcaption>{props.caption}</figcaption> : ""}
        </figure>
      </motion.div>
    </div>
  );
};

export default Picture;
