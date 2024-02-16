import { Fragment } from "react";
import { Header } from "./Header/Header";
import {BarCards} from './BarCards/BarCards';

export const App = () => {
  return (<Fragment>
      <Header />
      <BarCards/>
    </Fragment>
  );
};
