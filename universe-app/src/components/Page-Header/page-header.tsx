import { PageHeader } from 'antd';
import React from 'react';

const PageHeaderAstronauts: React.FC = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Listagem de luas"
    subTitle="Crie e edite as informações abaixo."
  />
);

export default PageHeaderAstronauts;
