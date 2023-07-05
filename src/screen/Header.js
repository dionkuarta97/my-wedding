import { useSpring, animated } from "react-spring";
const Header = () => {
  const props2 = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.div align="center" style={props2}>
        <h1
          style={{
            fontFamily: "'Supermercado One', cursive",
          }}
        >
          The wedding of
        </h1>
      </animated.div>
    </>
  );
};

export default Header;
