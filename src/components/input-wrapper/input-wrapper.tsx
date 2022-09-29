import { FC } from "react";
import styles from "./input.module.css";

interface IInputWrapper extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}
const InputWrapper: FC<IInputWrapper> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default InputWrapper;