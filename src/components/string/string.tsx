import { FC } from "react";
import styles from "./string.module.css";
import { Button } from "../ui/button/button";
import { Input } from "../ui/input/input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Circle } from "../ui/circle/circle";
import InputWrapper from "../input-wrapper/input-wrapper";

export const StringComponent: FC = () => {
  const handleClick = () => {
    alert("Изменить текст");
  };

  return (
    <SolutionLayout title="Строка">
      <InputWrapper>
        <Input extraClass={styles.input} isLimitText={true} maxLength={11} />
        <Button text={"Развернуть"} type="submit" onClick={handleClick} />
      </InputWrapper>
      <ul className={styles.list}>
        <li className={`${styles["list-element"]}`}>
          <Circle letter={"A"} />
        </li>
        <li className={`${styles["list-element"]}`}>
          <Circle letter={"B"} />
        </li>
        <li className={`${styles["list-element"]}`}>
          <Circle letter={"R"} />
        </li>
        <li className={`${styles["list-element"]}`}>
          <Circle letter={"A"} />
        </li>
        <li className={`${styles["list-element"]}`}>
          <Circle letter={"K"} />
        </li>
      </ul>
    </SolutionLayout>
  );
};
