import { Fragment } from "react";
import { Header } from "./Header/Header";
import { Menu } from "./Menu/Menu";
import {BarCards} from './BarCards/BarCards';

export const App = () => {
  return (<Fragment>
      <Header />
      <Menu/>
      <BarCards/>
    </Fragment>
  );
};
