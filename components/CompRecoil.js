import { useRecoilState } from "recoil";
import { demoState, dempArrayState } from "../recoil/atom";
const CompRecoil = () => {
  const [text, setText] = useRecoilState(demoState);
  const [array, setArray] = useRecoilState(dempArrayState);
  return (
    <div>
      <h1>A {text}</h1>
      {array.map((arr) => (
        <p>{arr}</p>
      ))}
    </div>
  );
};

export default CompRecoil;
