import { Fragment } from "react";
import { ConfigProvider } from 'antd';
import { Header } from "./Header/Header";
import {BarCards} from './BarCards/BarCards';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#de4242',
          borderRadius: 8,
          colorText: "#111111",
          colorBgContainer: '#f6ffed',
        },
      }}
    ><Fragment>
      <Header />
      <BarCards/>
    </Fragment>
    </ConfigProvider>
  );
};
