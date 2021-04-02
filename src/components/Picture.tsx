import { motion } from "framer-motion";
import { useState, useEffect, CSSProperties } from "react";
import { getImage } from "../utils/firebase";

interface Props {
  src?: string;
  fbpath?: string;
  style?: CSSProperties;
  className?: string;
  overlayed?: boolean;
  onClick?: () => void;
  caption?: React.ReactNode;
  layoutId?: string;
}

const greyPng = `, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNMO8OAARiHsiAAVkoL/1ec1jIAAAAASUVORK5CYII=)`

const Picture: React.FunctionComponent<Props> = (props) => {

  const { style, src, fbpath, overlayed, onClick, layoutId } = props;
  const [url, setImg] = useState('');
  const [opacity, setOpacity] = useState(0);
  const [animate, setAnimate] = useState(true);

  const loaded = () => {
    if (!opacity) {
      setOpacity(1)
      setTimeout(() => {
        setAnimate(false)
      }, 300)
    }
  }

  useEffect(() => {
    (async () => {
      if (src) {
        setImg(`${src}`);
      } else if (fbpath) {
        const img = await getImage(fbpath);
        setImg(img);
      }
    })()  
  }, []);


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
          backgroundImage: `url(${url}) ${overlayed ? greyPng : ""}`,
          opacity: opacity,
        }}
        layoutId={layoutId}
      >
        <figure>
          <motion.img src={url} style={{ display: "none" }} onLoad={loaded}/>
          {props.caption ? <figcaption>{props.caption}</figcaption> : ""}
        </figure>
      </motion.div>
    </div>
  );

}

export default Picture